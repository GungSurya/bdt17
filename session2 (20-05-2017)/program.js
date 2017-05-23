//// STEP I 
//console.log("HELLO WORLD");
//terminal for run: learnyounode verify program.js

/// STEP 2
/*var sum = 0

for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i])
}
console.log(sum);*/
//terminal for run: learnyounode verify program.js 1 2 3

///STEP 3
/*var fs = require('fs');
var jumlahline = fs.readFileSync(process.argv[2])
                    .toString()
                    .split('\n')
                    .length-1;
console.log(jumlahline);*/
//terminal for run: learnyounode verify program.js ./ coba.txt

//STEP 4
/*var fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
    if(err){
        console.log('error', err);
        return;    
    }
    var jumlahline = data.toString().split('\n').length-1;
    console.log(jumlahline);
});*/
//terminal for run: learnyounode verify program.js ./ coba.txt

//STEP 5
/*var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, list){
    for(var i = 0; i< list.length; i++)
    {
        if('.'+process.argv[3] == path.extname(list[i])){
            console.log(list[i]);
        }else{
            continue;
        }
    }
})*/
//terminal for run: learnyounode verify program.js ./ js
 

//STEP 6
/*var modul = require('./mymodule');
modul(process.argv[2], process.argv[3], function(err, data){
    if (err) {
        return console.error('you have error:', err)
    }    
    data.forEach(function(item) {
       console.log(item);
    });
});*/
//terminal for run: learnyounode verify program.js ./ js

//STEP 7
/*var http = require('http');

http.get(process.argv[2], function(res){
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        console.log(chunk);
    });
    res.on('error', function(err){
        console.log(err);
    });
});*/
//terminal for run: learnyounode verify program.js

//STEP 8
/*var http = require('http');

http.get(process.argv[2], function(res){
    var rows = '';
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        rows += chunk;
       // console.log(chunk);
    });
    res.on('end', function(){
        console.log(rows.length);
        console.log(rows);        
    });
    res.on('error', function(err){
        console.log(err);
    });
});*/
//terminal for run: learnyounode verify program.js

//STEP 9
/*var http = require('http');

http.get(process.argv[2], function(res){
    var rows = '';
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        rows += chunk;
    });
    res.on('end', function(){
        console.log(rows);
       http.get(process.argv[3], function(res){            
            var rows = '';
            res.on('data', function(chunk){
                rows += chunk;
            });  
            res.on('end', function(){
                console.log(rows);                                    
                http.get(process.argv[4], function(res){
                    var rows = '';
                    res.on('data', function(chunk){
                        rows += chunk;
                    });
                    res.on('end', function(){
                        console.log(rows);
                    });
                });
            });
       });
    });
    res.on('error', function(err){
        console.log(err);
    });
});*/
//terminal for run: learnyounode verify program.js

//STEP 10
/*var net = require('net');
function zeroValue(i){
    return (i < 10 ? '0' : '') + i;
}
net.createServer(function(socket){
        var date = new Date();                
            
        socket.write(date.getFullYear()+'-'+zeroValue(date.getMonth() + 1)+'-'+zeroValue(date.getDate())+' '+zeroValue(date.getHours())+':'+zeroValue(date.getMinutes())+"\n");
        socket.end();
    }).listen(process.argv[2]);*/
//terminal for run: learnyounode verify program.js
    
//STEP 11
/*var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var stream = fs.createReadStream(process.argv[3]);
    stream.on('open', function(){
        stream.pipe(res);
    });
}).listen(process.argv[2]);*/
//terminal for run: learnyounode verify program.js

//STEP 12
/*var http = require('http');
var map = require('through2-map');

http.createServer(function(req, res){
    if(req.method == 'POST'){
        var _map = map(function(chunk){
            return chunk.toString().toUpperCase();
        });
        req.pipe(_map).pipe(res);
    }
}).listen(process.argv[2]);*/
//karena tidak ditemukan through2-map, maka saya npm install through2-map
//terminal for run: learnyounode verify program.js

//STEP 13
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    var parseUrl = url.parse(req.url, true);
    var date = new Date(parseUrl.query.iso);
    
    //console.log(parseUrl);
    switch(parseUrl.pathname){
        case '/api/parsetime':
            res.writeHead(200, {
                "Content-type":"application/json", 
            });
            res.end(JSON.stringify({
				"hour":date.getHours(),
				"minute":date.getMinutes(),
				"second":date.getSeconds()                
            }));
        break;
		case '/api/unixtime':
			res.writeHead(200,{
				"Content-Type":"application/json",
			});
			res.end(JSON.stringify({
				"unixtime":date.getTime()
			}));
		break;
    }
}).listen(process.argv[2]);

//terminal for run: learnyounode verify program.js http://localhost:9000/api/parsetime
//terminal for run: learnyounode verify program.js http://localhost:9000/api/unixtime