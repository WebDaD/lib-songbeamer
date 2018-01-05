/* global it, describe */
var assert = require('assert')
var ablauf = require('../libs/ablauf.js')
var fs = require('fs')
describe('UT02: lib-ablauf', function () {
  describe('UT02-01: toJson', function () {
    it('UT02-01-01: json from file should match json', function (done) {
      fs.readFile('./tests/data/ablauf.col', 'utf8', function (err, data) {
        if (err) {
          done(new Error(err))
        } else {
          ablauf.toJSON(data, function (err, json) {
            if (err) {
              done(new Error(err))
            } else {
              fs.readFile('./tests/data/ablauf.json', 'utf8', function (err, ablaufjson) {
                if (err) {
                  done(new Error(err))
                } else {
                  let aj = JSON.parse(ablaufjson)
                  assert.deepEqual(json, aj.items)
                  done()
                }
              })
            }
          })
        }
      })
    })
  })
  describe('UT02-02: toFile', function () {
    it('UT02-02-01: string from json should match file', function (done) {
      fs.readFile('./tests/data/ablauf.json', 'utf8', function (err, data) {
        if (err) {
          done(new Error(err))
        } else {
          var aj = JSON.parse(data)
          ablauf.toFile(aj.items, function (err, text) {
            if (err) {
              done(new Error(err))
            } else {
              fs.readFile('./tests/data/ablauf.col', 'utf8', function (err, ablauftext) {
                if (err) {
                  done(new Error(err))
                } else {
                  assert.equal(text, ablauftext)
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
