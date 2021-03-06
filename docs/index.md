<a name="module_index"></a>

## index
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

### index.song2JSON(file, callback) ÔçÆ
Read in Song-File and callback a json

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path to a Song-File |
| callback | [<code>jsonSongCallback</code>](#index..jsonSongCallback) | A Callback with an error or the Json |

<a name="module_index.ablauf2JSON"></a>

### index.ablauf2JSON(file, callback) ÔçÆ
Read in Ablaufplan-File and callback a json

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path to a Ablaufplan-File |
| callback | [<code>jsonAblaufCallback</code>](#index..jsonAblaufCallback) | A Callback with an error or the Json |

<a name="module_index.json2Song"></a>

### index.json2Song(object, file, callback) ÔçÆ
Read in JSON, Write to File and callback possible Errors

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | A JSON-Song-Object |
| file | <code>string</code> | Path to a Song-File |
| callback | [<code>errorCallback</code>](#index..errorCallback) | A Callback with an error or nothing |

<a name="module_index.json2Ablauf"></a>

### index.json2Ablauf(object, file, callback) ÔçÆ
Read in JSON, Write to File and callback possible Errors

**Kind**: static method of [<code>index</code>](#module_index)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | A JSON-Ablaufplan-Object |
| file | <code>string</code> | Path to an Ablaufplan-File |
| callback | [<code>errorCallback</code>](#index..errorCallback) | A Callback with an error or nothing |

