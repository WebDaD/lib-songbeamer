/* global it, describe */
var assert = require('assert')
var lsb = require('../index.js')
var fs = require('fs')
describe('UT03: lib-songbeamer (full module)', function () {
  describe('UT03-01: AblauftoJson', function () {
    it('UT03-01-01: json from file should match json', function (done) {
      lsb.ablauf2JSON('./tests/data/ablauf.col', function (err, json) {
        if (err) {
          done(new Error(err))
        } else {
          fs.readFile('./tests/data/ablauf.json', 'utf8', function (err, ablaufjson) {
            if (err) {
              done(new Error(err))
            } else {
              let aj = JSON.parse(ablaufjson)
              assert.deepEqual(json, aj)
              done()
            }
          })
        }
      })
    })
  })
  describe('UT03-02: AblauftoFile', function () {
    it('UT03-02-01: string from json should match file', function (done) {
      fs.readFile('./tests/data/ablauf.json', 'utf8', function (err, data) {
        if (err) {
          done(new Error(err))
        } else {
          var aj = JSON.parse(data)
          lsb.json2Ablauf(aj, './tests/tmp/ablauf.col', function (err) {
            if (err) {
              done(new Error(err))
            } else {
              fs.readFile('./tests/data/ablauf.col', 'utf8', function (err, ablauftext) {
                if (err) {
                  done(new Error(err))
                } else {
                  fs.readFile('./tests/tmp/ablauf.col', 'utf8', function (err, tmptext) {
                    if (err) {
                      done(new Error(err))
                    } else {
                      assert.equal(tmptext, ablauftext)
                      done()
                    }
                  })
                }
              })
            }
          })
        }
      })
    })
  })
  describe('UT03-03: SongtoJson', function () {
    it('UT03-03-01: json from file should match json', function (done) {
      lsb.song2JSON('./tests/data/song.sng', function (err, json) {
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
    })
  })
  describe('UT03-04: SongtoFile', function () {
    it('UT03-04-01: string from json should match file', function (done) {
      fs.readFile('./tests/data/song.json', 'utf8', function (err, data) {
        if (err) {
          done(new Error(err))
        } else {
          var sj = JSON.parse(data)
          lsb.json2Song(sj, './tests/tmp/song.sng', function (err) {
            if (err) {
              done(new Error(err))
            } else {
              fs.readFile('./tests/data/song.sng', 'utf8', function (err, songtext) {
                if (err) {
                  done(new Error(err))
                } else {
                  fs.readFile('./tests/tmp/song.sng', 'utf8', function (err, tmptext) {
                    if (err) {
                      done(new Error(err))
                    } else {
                      assert.equal(tmptext, songtext)
                      done()
                    }
                  })
                }
              })
            }
          })
        }
      })
    })
  })
})
