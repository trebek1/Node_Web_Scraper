var Xray = require('x-ray');
var xray = new Xray(); 

xray('http://google.com', 'a',

[{
	a: ''
}]
).write('results.json')