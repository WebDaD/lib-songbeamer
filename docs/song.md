<a name="module_song"></a>

## song
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

### song.toJSON(data, callback) ÔçÆ
Get Json from a string

**Kind**: static method of [<code>song</code>](#module_song)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | String as delivered by fs.readFile |
| callback | [<code>jsonCallback</code>](#song..jsonCallback) | A Callback with an error or the Json |

<a name="module_song.toFile"></a>

### song.toFile(json, callback) ÔçÆ
Write Json to a File String

**Kind**: static method of [<code>song</code>](#module_song)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>object</code> | String as delivered by fs.readFile |
| callback | [<code>stringCallback</code>](#song..stringCallback) | A Callback with an error or the String as delivered to fs.writeFile |

<a name="module_song..isCaption"></a>

### song~isCaption(text) ÔçÆ <code>bool</code>
Checks if a string is a caption (Vers, Bridge, Chorus, ...)

**Kind**: inner method of [<code>song</code>](#module_song)  
**Returns**: <code>bool</code> - - True, if is a caption, else false  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | A Line of Text |

