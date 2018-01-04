/**
 * @overview Main Includer
 * @module index
 * @author Dominik Sigmund
 * @version 1.0
 * @description Packs the libs
 * @memberof lib-songbeamer
 * @requires song
 * @requires ablauf
 * @requires fs
 */
var song = require('./libs/song.js')
var ablauf = require('./libs/ablauf.js')
var fs = require('fs')
/** Read in Song-File and callback a json
 * @param {string} file - Path to a Song-File
 * @param {index~jsonSongCallback} callback - A Callback with an error or the Json
 * @returns Nothing
 * */
exports.song2JSON = function (file, callback) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    } else {
      song.toJSON(data, function (err, json) {
        if (err) {
          callback(err)
        } else {
          callback(null, json)
        }
      })
    }
  })
}
/** Read in Ablaufplan-File and callback a json
 * @param {string} file - Path to a Ablaufplan-File
 * @param {index~jsonAblaufCallback} callback - A Callback with an error or the Json
 * @returns Nothing
 * */
exports.ablauf2JSON = function (file, callback) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    } else {
      ablauf.toJSON(data, function (err, json) {
        if (err) {
          callback(err)
        } else {
          var cbjson = {}
          cbjson.title = file
          cbjson.items = json
          callback(null, cbjson)
        }
      })
    }
  })
}
/** Read in JSON, Write to File and callback possible Errors
* @param {object} object - A JSON-Song-Object 
* @param {string} file - Path to a Song-File
 * @param {index~errorCallback} callback - A Callback with an error or nothing
 * @returns Nothing
 * */
exports.json2Song = function (object, file, callback) {
  song.toFile(object, function (err, data) {
    if (err) {
      callback(err)
    } else {
      fs.writeFile(file, data, function (err) {
        if (err) {
          callback(err)
        } else {
          callback(null)
        }
      })
    }
  })
}
/** Read in JSON, Write to File and callback possible Errors
* @param {object} object - A JSON-Ablaufplan-Object 
* @param {string} file - Path to an Ablaufplan-File
 * @param {index~errorCallback} callback - A Callback with an error or nothing
 * @returns Nothing
 * */
exports.json2Ablauf = function (object, file, callback) {
  ablauf.toFile(object.items, function (err, data) {
    if (err) {
      callback(err)
    } else {
      fs.writeFile(file, data, function (err) {
        if (err) {
          callback(err)
        } else {
          callback(null)
        }
      })
    }
  })
}
/**
  * This callback is displayed as part of the index class.
  * @callback index~jsonSongCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  * @param {object} Json - The JSON. See Schema
  */
  /**
  * This callback is displayed as part of the index class.
  * @callback index~jsonAblaufCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  * @param {object} Json - The JSON. See Schema
  */
  /**
  * This callback is displayed as part of the index class.
  * @callback index~errorCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  */
  