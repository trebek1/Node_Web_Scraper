var Xray = require('x-ray');
var xray = new Xray(); 

xray('http://www.ebaumsworld.com/', '.homepageFeature',

[{
 	title: '.frontpageTitle',
 	link: 'a@href'

}]
)
.write('results.json')

