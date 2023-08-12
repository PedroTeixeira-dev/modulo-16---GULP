const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourceMap = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imageMin = require('gulp-imagemin')

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourceMap.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMap.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}


exports.default = function(){
    gulp.watch('./source/styles/*scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJs))
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, gulp.series(comprimeImagens))
}
