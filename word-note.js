/*
    word-note.js
*/

var fs = require('fs')
,   _ = require('./_')


fs.readFile('./words.txt',{'encoding':'utf8'},function(err,data){
    _.handleError()
    group(data)
})

function group(str){
    var sys = process.platform
    ,   splitChar = {
                        'darwin':   '\r'
                        ,'freebsd': '\n'
                        ,'linux':   '\r\n'
                        ,'sunos':   '\n'
                        ,'win32':   '\r\n'
                    }
    ,   arr = str.split(splitChar[sys])||[]
    ,   trimed = []
    ,   pair = []

    arr.forEach(function(val,i,thisArr){
        val = val.trim()
        if(val!==''){
            trimed.push(val)
        }
    })
    if(trimed.length%2){
        trimed.push('')
    }
    arr.length = 0;

    var i = 0
    ,   len = trimed.length
    for(; i<len; i+=2){
        pair.push({
            en: trimed[i]
            ,zh:trimed[i+1]
        })
    }

    _.log(pair)
}
