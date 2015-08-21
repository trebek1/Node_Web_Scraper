var Xray = require('x-ray');
var xray = new Xray(); 

xray('https://www.google.com/search?q=Starcraft', 'a',

[{
 	a: '',
 	href: '@href'

}]
).write('results.json')