const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compileSass(){
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./build/styles/'));
}

function compileJS(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function compileImages(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function watch(){
    gulp.watch('./src/styles/**/*.scss', compileSass, compileJS, compileImages)
}

exports.default = gulp.parallel(compileSass, compileJS ,compileImages);

exports.watch = watch;