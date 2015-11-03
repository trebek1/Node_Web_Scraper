

var Xray = require('x-ray');
var xray = new Xray(); 

xray('https://soundcloud.com/search?q=Burning%20Man', 'body',

[{
 	Hai: '',
 	yo: 'div:nth-child(7) @id',
 	hi: 'div:id(app)'

 		
}]
).write('results.json')

