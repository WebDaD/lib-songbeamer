<a name="module_ablaud"></a>

## ablaud
Gets Json from and json to Ablaufplan-files

**Version**: 1.0  
**Author**: Dominik Sigmund  

* [ablaud](#module_ablaud)
    * _static_
        * [.toFile(json, callback)](#module_ablaud.toFile) ÔçÆ
    * _inner_
        * [~regex](#module_ablaud..regex) ÔçÆ
        * [~clean(text)](#module_ablaud..clean) ÔçÆ <code>String</code>
        * [~color2Hex(color)](#module_ablaud..color2Hex) ÔçÆ <code>string</code>
        * [~hex2Color(hex)](#module_ablaud..hex2Color) ÔçÆ <code>string</code>
        * [~getType(caption, filename)](#module_ablaud..getType) ÔçÆ <code>string</code>
        * [~colourNameToHex(colour)](#module_ablaud..colourNameToHex) ÔçÆ <code>string</code>

<a name="module_ablaud.toFile"></a>

### ablaud.toFile(json, callback) ÔçÆ
Write Json to a File String

**Kind**: static method of [<code>ablaud</code>](#module_ablaud)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>object</code> | String as delivered by fs.readFile |
| callback | [<code>stringCallback</code>](#ablauf..stringCallback) | A Callback with an error or the String as delivered to fs.writeFile |

<a name="module_ablaud..regex"></a>

### ablaud~regex ÔçÆ
Get Json from a string

**Kind**: inner constant of [<code>ablaud</code>](#module_ablaud)  
**Returns**: Nothing  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | String as delivered by fs.readFile |
| callback | [<code>jsonCallback</code>](#ablauf..jsonCallback) | A Callback with an error or the Json |

<a name="module_ablaud..clean"></a>

### ablaud~clean(text) ÔçÆ <code>String</code>
Removes Strange Symbols from the Text for a better json

**Kind**: inner method of [<code>ablaud</code>](#module_ablaud)  
**Returns**: <code>String</code> - - A cleaner bit of Text  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | A Bite of Text |

<a name="module_ablaud..color2Hex"></a>

### ablaud~color2Hex(color) ÔçÆ <code>string</code>
Takes Color Information and returns a css-hex-representation

**Kind**: inner method of [<code>ablaud</code>](#module_ablaud)  
**Returns**: <code>string</code> - - A clean hex-rep  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Some weird color (string, windows decimal, ...) |

<a name="module_ablaud..hex2Color"></a>

### ablaud~hex2Color(hex) ÔçÆ <code>string</code>
Takes a Hex-Color and makes a windows-decimal-color out of it.

**Kind**: inner method of [<code>ablaud</code>](#module_ablaud)  
**Returns**: <code>string</code> - - Windows Decimal Color  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | A Hex Color |

<a name="module_ablaud..getType"></a>

### ablaud~getType(caption, filename) ÔçÆ <code>string</code>
Guesses the Type of the Item

**Kind**: inner method of [<code>ablaud</code>](#module_ablaud)  
**Returns**: <code>string</code> - - Type, may be: song, video, powerpoint, sermon, unknown  

| Param | Type | Description |
| --- | --- | --- |
| caption | <code>string</code> | The Caption of the item |
| filename | <code>string</code> | The Filename of the item |

<a name="module_ablaud..colourNameToHex"></a>

### ablaud~colourNameToHex(colour) ÔçÆ <code>string</code>
Takes a cssColor-Name and returns the hex-value or an empty string

**Kind**: inner method of [<code>ablaud</code>](#module_ablaud)  
**Returns**: <code>string</code> - - A Hex-Color or an empty String  

| Param | Type | Description |
| --- | --- | --- |
| colour | <code>string</code> | A ColourName |

