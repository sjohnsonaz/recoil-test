var gulp = require('gulp');
var webpack = require('webpack-stream');
webpackConfig = require('./webpack.config.js');

gulp.task('js:build', function () {
    webpackConfig.watch = false;
    return gulp.src('src/tsx/main.tsx')
        .pipe(webpack(webpackConfig))
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('dist/js'));
});

gulp.task("js:build-watch", function () {
    webpackConfig.watch = true;
    return gulp.src('src/tsx/main.tsx')
        .pipe(webpack(webpackConfig))
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['js:build']);

gulp.task('dev', ['js:build-watch']);
