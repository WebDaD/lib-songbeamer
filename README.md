# Lib-Songbeamer

A Module for transforming [SongBeamer](https://www.songbeamer.de/) Song-Files and Ablaufplan-Files into JSON and Back

## Installation

... is as simple as `npm install lib-songbeamer`

## Usage

First, require the Module:

`const songbeamer = require('lib-songbeamer')`

Then you may perform the following actions:

### Read in a Song-File (.sng) into json

```js
songbeamer.song2JSON('examples/song.sng', function (err, json) {
  if (err) {
    console.error(err)
  } else {
    // Do Something with the JSON
  }
})
```

### Read in an Ablaufplan-File (.col) into json

```js
songbeamer.ablauf2JSON('examples/ablaufplan.col', function (err, json) {
  if (err) {
    console.error(err)
  } else {
    // Do Something with the JSON
  }
})
```

### Write Some JSON into a Song-File (.sng)

```js
songbeamer.json2Song(json, 'examples/song.sng', function (err) {
  if (err) {
    console.error(err)
  } else {
    // All was good
  }
})
```

Remember: The JSON must be fitting (see Documentation>JSON)

### Write Some JSON into an Ablaufplan-File (.col)

```js
songbeamer.json2Ablauf(json, 'examples/ablaufplan.col', function (err) {
  if (err) {
    console.error(err)
  } else {
    // All was good
  }
})
```

Remember: The JSON must be fitting (see Documentation>JSON)

## Dependencies

None.

## Documentation for Developers

Here be Some Infos to make this even better.

### Libs

ClassDiagram:

![The diagram](https://github.com/WebDaD/lib-songbeamer/raw/master/docs/classdiagram.png "The class Diagram")

Can be found in docs/classdiagram.png

Also as editable plantUML-File.

JSDOC. See also HTML Version @ docs/jsdoc/index.html

#### index
Packs the libs

**Requires**: <code>module:song</code>, <code>module:ablauf</code>, <code>module:fs</code>  
**Version**: 1.0  
**Author**: Dominik Sigmund  

* [index](#module_index)
    * [.song2JSON(file, callback)](#module_index.song2JSON) ÔçÆ
    * [.ablauf2JSON(file, callback)](#module_index.ablauf2JSON) ÔçÆ
    * [.json2Song(object, file, callback)](#module_index.json2Song) ÔçÆ
    * [.json2Ablauf(object, file, callback)](#module_index.json2Ablauf) ÔçÆ

<a name="module_index.song2JSON"></a>

##### index.song2JSON(file, callback) ÔçÆ
Read in Song-File and callback a json

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path to a Song-File |
| callback | [<code>jsonSongCallback</code>](#index..jsonSongCallback) | A Callback with an error or the Json |

<a name="module_index.ablauf2JSON"></a>

##### index.ablauf2JSON(file, callback) ÔçÆ
Read in Ablaufplan-File and callback a json

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path to a Ablaufplan-File |
| callback | [<code>jsonAblaufCallback</code>](#index..jsonAblaufCallback) | A Callback with an error or the Json |

<a name="module_index.json2Song"></a>

##### index.json2Song(object, file, callback) ÔçÆ
Read in JSON, Write to File and callback possible Errors

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | A JSON-Song-Object |
| file | <code>string</code> | Path to a Song-File |
| callback | [<code>errorCallback</code>](#index..errorCallback) | A Callback with an error or nothing |

<a name="module_index.json2Ablauf"></a>

##### index.json2Ablauf(object, file, callback) ÔçÆ
Read in JSON, Write to File and callback possible Errors

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | A JSON-Ablaufplan-Object |
| file | <code>string</code> | Path to an Ablaufplan-File |
| callback | [<code>errorCallback</code>](#index..errorCallback) | A Callback with an error or nothing |

#### song

Gets Json from and json to song-files

**Version**: 1.0  
**Author**: Dominik Sigmund  

* [song](#module_song)
    * _static_
        * [.toJSON(data, callback)](#module_song.toJSON) ÔçÆ
        * [.toFile(json, callback)](#module_song.toFile) ÔçÆ
    * _inner_
        * [~isCaption(text)](#module_song..isCaption) ÔçÆ <code>bool</code>

<a name="module_song.toJSON"></a>

##### song.toJSON(data, callback) ÔçÆ
Get Json from a string

**Kind**: static method of [<code>song</code>](#module_song)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | String as delivered by fs.readFile |
| callback | [<code>jsonCallback</code>](#song..jsonCallback) | A Callback with an error or the Json |

<a name="module_song.toFile"></a>

##### song.toFile(json, callback) ÔçÆ
Write Json to a File String

**Kind**: static method of [<code>song</code>](#module_song)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>object</code> | String as delivered by fs.readFile |
| callback | [<code>stringCallback</code>](#song..stringCallback) | A Callback with an error or the String as delivered to fs.writeFile |

<a name="module_song..isCaption"></a>

##### song~isCaption(text) ÔçÆ <code>bool</code>
Checks if a string is a caption (Vers, Bridge, Chorus, ...)

**Kind**: inner method of [<code>song</code>](#module_song)  
**Returns**: <code>bool</code> - - True, if is a caption, else false  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | A Line of Text |

#### ablaufplan

Gets Json from and json to Ablaufplan-files

**Version**: 1.0  
**Author**: Dominik Sigmund  

* [ablauf](#module_ablauf)
    * _static_
        * [.toFile(json, callback)](#module_ablauf.toFile) ÔçÆ
    * _inner_
        * [~regex](#module_ablauf..regex) ÔçÆ
        * [~clean(text)](#module_ablauf..clean) ÔçÆ <code>String</code>
        * [~color2Hex(color)](#module_ablauf..color2Hex) ÔçÆ <code>string</code>
        * [~hex2Color(hex)](#module_ablauf..hex2Color) ÔçÆ <code>string</code>
        * [~getType(caption, filename)](#module_ablauf..getType) ÔçÆ <code>string</code>
        * [~colourNameToHex(colour)](#module_ablauf..colourNameToHex) ÔçÆ <code>string</code>

<a name="module_ablauf.toFile"></a>

##### ablauf.toFile(json, callback) ÔçÆ
Write Json to a File String

**Kind**: static method of [<code>ablauf</code>](#module_ablauf)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>object</code> | String as delivered by fs.readFile |
| callback | [<code>stringCallback</code>](#ablauf..stringCallback) | A Callback with an error or the String as delivered to fs.writeFile |

<a name="module_ablauf..regex"></a>

##### ablauf~regex ÔçÆ
Get Json from a string

**Kind**: inner constant of [<code>ablauf</code>](#module_ablauf)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | String as delivered by fs.readFile |
| callback | [<code>jsonCallback</code>](#ablauf..jsonCallback) | A Callback with an error or the Json |

<a name="module_ablauf..clean"></a>

##### ablauf~clean(text) ÔçÆ <code>String</code>
Removes Strange Symbols from the Text for a better json

**Kind**: inner method of [<code>ablauf</code>](#module_ablauf)  
**Returns**: <code>String</code> - - A cleaner bit of Text  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | A Bite of Text |

<a name="module_ablauf..color2Hex"></a>

##### ablauf~color2Hex(color) ÔçÆ <code>string</code>
Takes Color Information and returns a css-hex-representation

**Kind**: inner method of [<code>ablauf</code>](#module_ablauf)  
**Returns**: <code>string</code> - - A clean hex-rep  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Some weird color (string, windows decimal, ...) |

<a name="module_ablauf..hex2Color"></a>

##### ablauf~hex2Color(hex) ÔçÆ <code>string</code>
Takes a Hex-Color and makes a windows-decimal-color out of it.

**Kind**: inner method of [<code>ablauf</code>](#module_ablauf)  
**Returns**: <code>string</code> - - Windows Decimal Color  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | A Hex Color |

<a name="module_ablauf..getType"></a>

##### ablauf~getType(caption, filename) ÔçÆ <code>string</code>
Guesses the Type of the Item

**Kind**: inner method of [<code>ablauf</code>](#module_ablauf)  
**Returns**: <code>string</code> - - Type, may be: song, video, powerpoint, sermon, unknown  

| Param | Type | Description |
| --- | --- | --- |
| caption | <code>string</code> | The Caption of the item |
| filename | <code>string</code> | The Filename of the item |

<a name="module_ablauf..colourNameToHex"></a>

##### ablauf~colourNameToHex(colour) ÔçÆ <code>string</code>
Takes a cssColor-Name and returns the hex-value or an empty string

**Kind**: inner method of [<code>ablauf</code>](#module_ablauf)  
**Returns**: <code>string</code> - - A Hex-Color or an empty String  

| Param | Type | Description |
| --- | --- | --- |
| colour | <code>string</code> | A ColourName |



### Tests

The Tests are written using the assert-class and can be found in the tests-folder

You may use your favorite Test-Runner to do them yourself.

My Commandline is as follows:

`istanbul cover _mocha -- tests/*.js -R mochawesome`

#### Results

Coverage: docs/coverage/index.html
Mochawesome-Report: docs/mochawesome-report/index.html

### JSON

Here are the Schema-Files of the JSON-Objects

#### Song

```js
{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "http://lib-songbeamer.com/song.json",
  "type": "object",
  "properties": {
    "slides": {
      "$id": "/properties/slides",
      "type": "array",
      "items": {
        "$id": "/properties/slides/items",
        "type": "object",
        "properties": {
          "lines": {
            "$id": "/properties/slides/items/properties/lines",
            "type": "array",
            "items": {
              "$id": "/properties/slides/items/properties/lines/items",
              "type": "string",
              "title": "The 0 Schema",
              "description": "A Line of Song-Text",
              "default": "",
              "examples": [
                "Our Father everlasting,"
              ]
            }
          },
          "caption": {
            "$id": "/properties/slides/items/properties/caption",
            "type": "string",
            "title": "The Caption Schema",
            "description": "The Caption of a Slide.",
            "default": "",
            "examples": [
              "Verse 1"
            ]
          }
        }
      }
    },
    "LangCount": {
      "$id": "/properties/LangCount",
      "type": "string",
      "title": "The Langcount Schema",
      "description": "How many Languages are there",
      "default": "",
      "examples": [
        "2"
      ]
    },
    "Title": {
      "$id": "/properties/Title",
      "type": "string",
      "title": "The Title Schema",
      "description": "Original Title of the Song",
      "default": "",
      "examples": [
        "This I Believe (The Creed)"
      ]
    },
    "Editor": {
      "$id": "/properties/Editor",
      "type": "string",
      "title": "The Editor Schema",
      "description": "How was this created.",
      "default": "",
      "examples": [
        "SongBeamer 4.14a"
      ]
    },
    "Version": {
      "$id": "/properties/Version",
      "type": "string",
      "title": "The Version Schema",
      "description": "Version of this Song.",
      "default": "",
      "examples": [
        "3"
      ]
    },
    "TitleFormat": {
      "$id": "/properties/TitleFormat",
      "type": "string",
      "title": "The Titleformat Schema",
      "description": "How the Title is formatted",
      "default": "",
      "examples": [
        "U"
      ]
    },
    "BackgroundImage": {
      "$id": "/properties/BackgroundImage",
      "type": "string",
      "title": "The Backgroundimage Schema",
      "description": "Path to the bg-image",
      "default": "",
      "examples": [
        "bgvideos://Blanko f�r Songbeamer-1.jpg"
      ]
    },
    "(c)": {
      "$id": "/properties/(c)",
      "type": "string",
      "title": "The (c) Schema",
      "description": "Copyrights",
      "default": "",
      "examples": [
        "Hillsong Worship"
      ]
    },
    "Translation": {
      "$id": "/properties/Translation",
      "type": "string",
      "title": "The Translation Schema",
      "description": "Name of the translators",
      "default": "",
      "examples": [
        "Martin Bruch & Dennis Strehl"
      ]
    },
    "Author": {
      "$id": "/properties/Author",
      "type": "string",
      "title": "The Author Schema",
      "description": "Name of the Text-Author.",
      "default": "",
      "examples": [
        "Ben Fielding & Matthew Crocker"
      ]
    },
    "Melody": {
      "$id": "/properties/Melody",
      "type": "string",
      "title": "The Melody Schema",
      "description": "Name of the Melody-Author.",
      "default": "",
      "examples": [
        "Ben Fielding & Matthew Crocker"
      ]
    },
    "TitleLang2": {
      "$id": "/properties/TitleLang2",
      "type": "string",
      "title": "The Titlelang2 Schema",
      "description": "Second Title in different Language",
      "default": "",
      "examples": [
        "Das glaube ich"
      ]
    },
    "VerseOrder": {
      "$id": "/properties/VerseOrder",
      "type": "string",
      "title": "The Verseorder Schema",
      "description": "Order of Slides, by captions",
      "default": "",
      "examples": [
        "Verse 1,Chorus,Verse 2,Chorus,Bridge,Chorus"
      ]
    }
  }
}
```

#### Ablaufplan

```json
{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "http://lib-songbeamer.com/ablauf.json",
  "type": "object",
  "properties": {
    "title": {
      "$id": "/properties/title",
      "type": "string",
      "title": "The Title Schema",
      "description": "The Title of the Ablaufplan",
      "default": "",
      "examples": [
        "examples/ablaufplan.col"
      ]
    },
    "items": {
      "$id": "/properties/items",
      "type": "array",
      "items": {
        "$id": "/properties/items/items",
        "type": "object",
        "properties": {
          "filename": {
            "$id": "/properties/items/items/properties/filename",
            "type": "string",
            "title": "The Filename Schema",
            "description": "Filename of an Item. May be Empty if no File",
            "default": "",
            "examples": [
              "..\\..\\Vorspann\\Vorspann 31.12.2017.ppt"
            ]
          },
          "caption": {
            "$id": "/properties/items/items/properties/caption",
            "type": "string",
            "title": "The Caption Schema",
            "description": "The Caption, as seen in the Songbeamer",
            "default": "",
            "examples": [
              "Vorspann 31.12.2017"
            ]
          },
          "color": {
            "$id": "/properties/items/items/properties/color",
            "type": "string",
            "title": "The Color Schema",
            "description": "The Color of the Item",
            "default": "",
            "examples": [
              "#000000"
            ]
          },
          "type": {
            "$id": "/properties/items/items/properties/type",
            "type": "string",
            "title": "The Type Schema",
            "description": "The guessed Type.",
            "default": "",
            "examples": [
              "powerpoint"
            ]
          }
        }
      }
    }
  }
}
```

## Authors

* Dominik Sigmund <dominik.sigmund@webdad.eu>

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>