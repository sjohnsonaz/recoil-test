var gulp = require('gulp');
var webpack = require('webpack-stream');
webpackConfig = require('./webpack.config.js');

gulp.task('js:build', function () {
    webpackConfig.watch = false;
    return gulp.src('src/js/main.jsx')
        .pipe(webpack(webpackConfig))
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('public/build'));
});

gulp.task("js:build-watch", function () {
    webpackConfig.watch = true;
    return gulp.src('src/js/main.jsx')
        .pipe(webpack(webpackConfig))
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('public/build'));
});

gulp.task('default', ['js:build']);

gulp.task('dev', ['js:build-watch']);
