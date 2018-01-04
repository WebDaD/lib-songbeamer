/**
 * @overview Ablaufplan-File Lib
 * @module ablauf
 * @author Dominik Sigmund
 * @version 1.0
 * @description Gets Json from and json to Ablaufplan-files
 * @memberof lib-songbeamer
 */
/** Get Json from a string
 * @param {string} data - String as delivered by fs.readFile
 * @param {ablauf~jsonCallback} callback - A Callback with an error or the Json
 * @returns Nothing
 * */
const regex = /item\s.*\s*Caption\s[=]\s(.*)\s.*\s*Color\s[=]\s(.*)\s.*(?:\s*FileName\s[=]\s(.*)\s.*)?/gm
exports.toJSON = function (data, callback) {
  var json = []
  let m
  while ((m = regex.exec(data)) !== null) {
    var item = {}
    item.filename = '' // Set as empty, it is optional
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }
    m.forEach((match, groupIndex) => {
      switch (groupIndex) {
        case 0: // item
          break
        case 1: // Caption
          item.caption = clean(match)
          break
        case 2: // Color
          item.color = color2Hex(match)
          break
        case 3: // (optional) Filename
          item.filename = clean(match)
          break
        default: callback(new Error('Should not happen: groupIndex=' + groupIndex + ', match=' + match))
      }
    })
    item.type = getType(item.caption, item.filename)
    json.push(item)
  }
  callback(null, json)
}
/** Write Json to a File String
 * @param {object} json - String as delivered by fs.readFile
 * @param {ablauf~stringCallback} callback - A Callback with an error or the String as delivered to fs.writeFile
 * @returns Nothing
 * */
exports.toFile = function (items, callback) {
  var file = 'object AblaufPlanItems: TAblaufPlanItems \r  items = < \r'
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    file += '    item\r'
    file += '      Caption = \'' + item.caption + '\'\r'
    file += '      Color = ' + hex2Color(item.color) + '\r'
    if (item.filename !== '') {
      file += '      FileName = \'' + item.filename + '\'\r'
    }
    if (index === items.length - 1) { // last item
      file += '    end>\r'
    } else {
      file += '    end\r'
    }
  }
  file += 'end'
  callback(null, file)
}
/** Removes Strange Symbols from the Text for a better json
 * @param {string} text - A Bite of Text
 * @returns {String} - A cleaner bit of Text
 * */
function clean (text) {
  if (typeof text !== 'undefined') {
    text = text.replace(/'/g, '')
    return text
  } else {
    return ''
  }
}
/** Takes Color Information and returns a css-hex-representation
 * @param {string} color - Some weird color (string, windows decimal, ...)
 * @returns {string} - A clean hex-rep
 * */
function color2Hex (color) {
  if (color.startsWith('cl')) { // color starts with cl
    var colortext = color.replace('cl', '').toLowerCase()
    return colourNameToHex(colortext)
  } else { // windows dec color
    // converts to a integer
    var intnumber = color - 0

    // isolate the colors - really not necessary
    var red, green, blue

    // needed since toString does not zero fill on left
    var template = '#000000'

    // in the MS Windows world RGB colors
    // are 0xBBGGRR because of the way Intel chips store bytes
    red = (intnumber & 0x0000ff) << 16
    green = intnumber & 0x00ff00
    blue = (intnumber & 0xff0000) >>> 16

    // mask out each color and reverse the order
    intnumber = red | green | blue

    // toString converts a number to a hexstring
    var HTMLcolor = intnumber.toString(16)

    // template adds # for standard HTML #RRGGBB
    HTMLcolor = template.substring(0, 7 - HTMLcolor.length) + HTMLcolor

    return HTMLcolor
  }
}
/** Takes a Hex-Color and makes a windows-decimal-color out of it.
 * @param {string} hex - A Hex Color
 * @returns {string} - Windows Decimal Color
 * */
function hex2Color (hex) {
  var intnumber = parseInt(hex.replace('#', ''), 16)
  var blue = (intnumber & 0x0000ff) << 16
  var green = intnumber & 0x00ff00
  var red = (intnumber & 0xff0000) >>> 16

  // mask out each color and reverse the order
  intnumber = blue | green | red

  return intnumber
}
/** Guesses the Type of the Item
 * @param {string} caption - The Caption of the item
 * @param {string} filename - The Filename of the item
 * @returns {string} - Type, may be: song, video, powerpoint, sermon, unknown
 * */
function getType (caption, filename) {
  if (typeof filename !== 'undefined') {
    console.log(filename)
    var p = filename.split('.')
    var suffix = p[p.length - 1].trim()
    switch (suffix) {
      case 'sng': return 'song'
      case 'mp4': return 'video'
      case 'ppt':
      case 'pptx': return 'powerpoint'
      default: return 'unknown'
    }
  } else {
    if (caption.indexOf('Predigt') >= 0) {
      return 'sermon'
    }
    // TODO: parse caption
    return 'unknown'
  }
}
/** Takes a cssColor-Name and returns the hex-value or an empty string
 * @param {string} colour - A ColourName
 * @returns {string} - A Hex-Color or an empty String
 * */
function colourNameToHex (colour) {
  var colours = {'aliceblue': '#f0f8ff',
    'antiquewhite': '#faebd7',
    'aqua': '#00ffff',
    'aquamarine': '#7fffd4',
    'azure': '#f0ffff',
    'beige': '#f5f5dc',
    'bisque': '#ffe4c4',
    'black': '#000000',
    'blanchedalmond': '#ffebcd',
    'blue': '#0000ff',
    'blueviolet': '#8a2be2',
    'brown': '#a52a2a',
    'burlywood': '#deb887',
    'cadetblue': '#5f9ea0',
    'chartreuse': '#7fff00',
    'chocolate': '#d2691e',
    'coral': '#ff7f50',
    'cornflowerblue': '#6495ed',
    'cornsilk': '#fff8dc',
    'crimson': '#dc143c',
    'cyan': '#00ffff',
    'darkblue': '#00008b',
    'darkcyan': '#008b8b',
    'darkgoldenrod': '#b8860b',
    'darkgray': '#a9a9a9',
    'darkgreen': '#006400',
    'darkkhaki': '#bdb76b',
    'darkmagenta': '#8b008b',
    'darkolivegreen': '#556b2f',
    'darkorange': '#ff8c00',
    'darkorchid': '#9932cc',
    'darkred': '#8b0000',
    'darksalmon': '#e9967a',
    'darkseagreen': '#8fbc8f',
    'darkslateblue': '#483d8b',
    'darkslategray': '#2f4f4f',
    'darkturquoise': '#00ced1',
    'darkviolet': '#9400d3',
    'deeppink': '#ff1493',
    'deepskyblue': '#00bfff',
    'dimgray': '#696969',
    'dodgerblue': '#1e90ff',
    'firebrick': '#b22222',
    'floralwhite': '#fffaf0',
    'forestgreen': '#228b22',
    'fuchsia': '#ff00ff',
    'gainsboro': '#dcdcdc',
    'ghostwhite': '#f8f8ff',
    'gold': '#ffd700',
    'goldenrod': '#daa520',
    'gray': '#808080',
    'green': '#008000',
    'greenyellow': '#adff2f',
    'honeydew': '#f0fff0',
    'hotpink': '#ff69b4',
    'indianred ': '#cd5c5c',
    'indigo': '#4b0082',
    'ivory': '#fffff0',
    'khaki': '#f0e68c',
    'lavender': '#e6e6fa',
    'lavenderblush': '#fff0f5',
    'lawngreen': '#7cfc00',
    'lemonchiffon': '#fffacd',
    'lightblue': '#add8e6',
    'lightcoral': '#f08080',
    'lightcyan': '#e0ffff',
    'lightgoldenrodyellow': '#fafad2',
    'lightgrey': '#d3d3d3',
    'lightgreen': '#90ee90',
    'lightpink': '#ffb6c1',
    'lightsalmon': '#ffa07a',
    'lightseagreen': '#20b2aa',
    'lightskyblue': '#87cefa',
    'lightslategray': '#778899',
    'lightsteelblue': '#b0c4de',
    'lightyellow': '#ffffe0',
    'lime': '#00ff00',
    'limegreen': '#32cd32',
    'linen': '#faf0e6',
    'magenta': '#ff00ff',
    'maroon': '#800000',
    'mediumaquamarine': '#66cdaa',
    'mediumblue': '#0000cd',
    'mediumorchid': '#ba55d3',
    'mediumpurple': '#9370d8',
    'mediumseagreen': '#3cb371',
    'mediumslateblue': '#7b68ee',
    'mediumspringgreen': '#00fa9a',
    'mediumturquoise': '#48d1cc',
    'mediumvioletred': '#c71585',
    'midnightblue': '#191970',
    'mintcream': '#f5fffa',
    'mistyrose': '#ffe4e1',
    'moccasin': '#ffe4b5',
    'navajowhite': '#ffdead',
    'navy': '#000080',
    'oldlace': '#fdf5e6',
    'olive': '#808000',
    'olivedrab': '#6b8e23',
    'orange': '#ffa500',
    'orangered': '#ff4500',
    'orchid': '#da70d6',
    'palegoldenrod': '#eee8aa',
    'palegreen': '#98fb98',
    'paleturquoise': '#afeeee',
    'palevioletred': '#d87093',
    'papayawhip': '#ffefd5',
    'peachpuff': '#ffdab9',
    'peru': '#cd853f',
    'pink': '#ffc0cb',
    'plum': '#dda0dd',
    'powderblue': '#b0e0e6',
    'purple': '#800080',
    'rebeccapurple': '#663399',
    'red': '#ff0000',
    'rosybrown': '#bc8f8f',
    'royalblue': '#4169e1',
    'saddlebrown': '#8b4513',
    'salmon': '#fa8072',
    'sandybrown': '#f4a460',
    'seagreen': '#2e8b57',
    'seashell': '#fff5ee',
    'sienna': '#a0522d',
    'silver': '#c0c0c0',
    'skyblue': '#87ceeb',
    'slateblue': '#6a5acd',
    'slategray': '#708090',
    'snow': '#fffafa',
    'springgreen': '#00ff7f',
    'steelblue': '#4682b4',
    'tan': '#d2b48c',
    'teal': '#008080',
    'thistle': '#d8bfd8',
    'tomato': '#ff6347',
    'turquoise': '#40e0d0',
    'violet': '#ee82ee',
    'wheat': '#f5deb3',
    'white': '#ffffff',
    'whitesmoke': '#f5f5f5',
    'yellow': '#ffff00',
    'yellowgreen': '#9acd32'}

  if (typeof colours[colour.toLowerCase()] !== 'undefined') {
    return colours[colour.toLowerCase()]
  } else {
    return ''
  }
}
/**
  * This callback is displayed as part of the ablauf class.
  * @callback ablauf~jsonCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  * @param {object} Json - The JSON. See Schema
  */
  /**
  * This callback is displayed as part of the ablauf class.
  * @callback ablauf~stringCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  * @param {object} String - The String, as in the file
  */
