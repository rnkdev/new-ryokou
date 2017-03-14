var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Simple watch task to check for changes in HTML and CSS file
gulp.task('serve', function() {
    browserSync.init({
	server: './',
	open: true
    });

    gulp.watch('./index.html', ['html']);
    gulp.watch('./assets/css/*.css', ['css']);

});

// Inject CSS to browser
gulp.task('css', function() {
    return gulp.src('./assets/css/*.css')
	.pipe(browserSync.stream());
});

// Reload when HTML changes
gulp.task('html', browserSync.reload);

// Default Task
gulp.task('default', ['serve']);
