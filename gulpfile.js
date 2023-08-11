const gulp = require('gulp')

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log('Executando via Gulp')
        callback()

    }, 2000)
}

function dizOi(callback) {
    setTimeout(function(){
        console.log('ola gulp')
        dizTchau()
        callback()
    },1000)
}

function dizTchau(){
    console.log('tchau gulp')
}

exports.default = gulp.parallel(funcaoPadrao, dizOi)
exports.dizOi = dizOi