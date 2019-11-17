let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))