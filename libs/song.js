/**
 * @overview Song-File Lib
 * @module song
 * @author Dominik Sigmund
 * @version 1.0
 * @description Gets Json from and json to song-files
 * @memberof lib-songbeamer
 */
/** Get Json from a string
 * @param {string} data - String as delivered by fs.readFile
 * @param {song~jsonCallback} callback - A Callback with an error or the Json
 * @returns Nothing
 * */
exports.toJSON = function (data, callback) {
  var lines = data.split('\r')
  var json = {}
  json.slides = []
  for (let index = 0; index < lines.length; index++) {
    var line = lines[index].trim()
    if (line.startsWith('#')) { // Properties
      var kv = line.split('=')
      json[kv[0].replace('#', '')] = kv[1]
    } else { // Slides
      var slide = {}
      slide.lines = []
      while (line !== '---') {
          // check if line is a caption
        if (isCaption(line)) {
          slide.caption = line
        } else {
          slide.lines.push(line)
        }
        index++
        if (typeof lines[index] !== 'undefined') {
          line = lines[index].trim()
        } else {
          break
        }
      }
      if (slide.lines.length > 0) {
        json.slides.push(slide)
      }
    }
  }
  callback(null, json)
}
/** Write Json to a File String
 * @param {object} json - String as delivered by fs.readFile
 * @param {song~stringCallback} callback - A Callback with an error or the String as delivered to fs.writeFile
 * @returns Nothing
 * */
exports.toFile = function (json, callback) {
  var file = ''
  for (var property in json) {
    if (property !== 'slides' && json.hasOwnProperty(property)) {
      file += '#' + property + '=' + json[property] + '\r\n'
    }
  }
  for (let index = 0; index < json.slides.length; index++) {
    file += '---\r\n'
    const slide = json.slides[index]
    if (typeof slide.caption !== 'undefined') {
      file += slide.caption + '\r\n'
    }
    for (let lineindex = 0; lineindex < slide.lines.length; lineindex++) {
      const line = slide.lines[lineindex]
      file += line + '\r\n'
    }
  }
  file = file.replace(/\r\n$/, '') // remove last newline
  callback(null, file)
}
/** Checks if a string is a caption (Vers, Bridge, Chorus, ...)
 * @param {string} text - A Line of Text
 * @returns {bool} - True, if is a caption, else false
 * */
function isCaption (text) {
  var captions = ['Vers', 'Verse', 'Bridge', 'Chorus', 'Refrain']
  if (new RegExp(captions.join('|')).test(text)) {
    return true
  } else {
    return false
  }
}
/**
  * This callback is displayed as part of the song class.
  * @callback song~jsonCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  * @param {object} Json - The JSON. See Schema
  */
  /**
  * This callback is displayed as part of the song class.
  * @callback song~stringCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  * @param {object} String - The String, as in the file
  */
