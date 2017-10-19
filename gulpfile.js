/* * * * * * * * * * * * * *
REQUIRES
* * * * * * * * * * * * * */

// Gulp
gulp = require('gulp'),

// Plumber
plumber = require('gulp-plumber'),

// Watch
watch = require('gulp-watch'),

// Compass
compass = require('gulp-compass'),

// Scripts
uglify = require('gulp-uglify');

/* * * * * * * * * * * * * *
COMPASS
* * * * * * * * * * * * * */

function styles() {
	return gulp.src('./assets/dev_files/styles/**/*.scss')
		.pipe(plumber())
		.pipe(compass({
			style: 'compressed',
			comments: 'false',
			sass: 'assets/dev_files/styles',
			css: 'assets/styles'
		}))
		.pipe(gulp.dest('./assets/styles'));
};

gulp.task('styles', styles);

/* * * * * * * * * * * * * *
SCRIPTS
* * * * * * * * * * * * * */

function scripts() {
	return gulp.src('./assets/dev_files/scripts/**/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('./assets/scripts'));
};

gulp.task('scripts', scripts);

/* * * * * * * * * * * * * *
TASK DEFAULT

Generate CSS and JS
* * * * * * * * * * * * * */

gulp.task('default', ['styles', 'scripts']);

/* * * * * * * * * * * * * *
WATCH

Watch for SASS and JS
* * * * * * * * * * * * * */

gulp.task('watch', function() {
	watch('./assets/dev_files/styles/**/*', styles);
	watch('./assets/dev_files/scripts/**/*', scripts);
});
