const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compileSass(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./build/styles/'));
}

function scripts(){
    return gulp.src('./src/scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/'));
}

function compileImages(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function watch(){
    gulp.watch('./src/styles/main.scss', compileSass)
}

exports.default = gulp.parallel(watch, scripts, compileImages);

// exports.watch = watch;
// exports.default = gulp.parallel(compileSass, scripts, compileImages);
// exports.watch = function(){
//     gulp.watch('./src/styles/*.scss', gulp.parallel(compileSass))
//     gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
// }