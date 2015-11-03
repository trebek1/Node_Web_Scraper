var Xray = require('x-ray');
var xray = new Xray(); 

xray('https://news.ycombinator.com/', 'tr.athing',

[{
 	rank: 'span.rank',
 	test1: 'td:nth-child(1)',
 	test2: 'td:nth-child(2)',
 	test3: 'td:nth-child(3)',
 	link: 'td:nth-child(3) a:nth-of-type(@href)'

}]
)
.paginate('a[rel="nofollow"]:last-child@href')
.limit(3)
.write('results.json')

//:lang()
//:nth-child()
//:nth-of-type
//nth-of-child(1)(text)