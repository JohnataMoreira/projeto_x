const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compileSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./build/styles/'));
}

function compileImages(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function watch(){
    gulp.watch('./src/styles/*.scss', compileSass)
}

exports.default = gulp.parallel(watch, compileImages);