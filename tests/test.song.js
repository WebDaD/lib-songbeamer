/* global it, describe */
var assert = require('assert')
var song = require('../libs/song.js')
var fs = require('fs')
describe('UT01: lib-song', function () {
  describe('UT01-01: toJson', function () {
    it('UT01-01-01: json from file should match json', function (done) {
      fs.readFile('./tests/data/song.sng', 'utf8', function (err, data) {
        if (err) {
          done(new Error(err))
        } else {
          song.toJSON(data, function (err, json) {
            if (err) {
              done(new Error(err))
            } else {
              fs.readFile('./tests/data/song.json', 'utf8', function (err, songjson) {
                if (err) {
                  done(new Error(err))
                } else {
                  let sj = JSON.parse(songjson)
                  assert.deepEqual(json, sj)
                  done()
                }
              })
            }
          })
        }
      })
    })
  })
  describe('UT01-02: toFile', function () {
    it('UT01-02-01: string from json should match file', function (done) {
      fs.readFile('./tests/data/song.json', 'utf8', function (err, data) {
        if (err) {
          done(new Error(err))
        } else {
          var sj = JSON.parse(data)
          song.toFile(sj, function (err, text) {
            if (err) {
              done(new Error(err))
            } else {
              fs.readFile('./tests/data/song.sng', 'utf8', function (err, songtext) {
                if (err) {
                  done(new Error(err))
                } else {
                  assert.equal(text, songtext)
                  done()
                }
              })
            }
          })
        }
      })
    })
  })
})
