var gulp = require('gulp'),
	jshint = require('gulp-jshint')
	webp = require('gulp-webp'),
	imagemin = require('gulp-imagemin'),
	postcss = require('gulp-postcss'),
	syntax = require('postcss-scss'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	livereload = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	babel = require('gulp-babel'),

	cssnext = require('gulp-cssnext'),
	cssimport = require('postcss-import'),
	nested = require('postcss-nested');

gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint({
					esversion: 6
				}))
        .pipe(jshint.reporter('default'));
});

gulp.task('buildJs', function(cb) {
	pump([
		sourcemaps.init(),
		gulp.src('js/*.js'),
		babel({
			presets:['es2015']
		}),
		uglify(),
		sourcemaps.write('_assets/js/maps'),
		gulp.dest('_assets/js')
	],
	cb
	);
});

gulp.task('imageMin', function(){
	return gulp.src('images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('img'))
	.pipe(webp({quality:60}))
	.pipe(gulp.dest('img'));
});

gulp.task('css', function(){
	var processors = [
		autoprefixer,
		 cssimport,
		// nested
	];
	return gulp.src('./css/sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(
			gulp.dest('./css/src')
		)
		.pipe(
			postcss(processors)
		 )
		 .pipe(postcss([ autoprefixer({
			 		browsers: ['last 2 versions']
	 			})])
	 		)
			.pipe(gulp.dest('./_assets/css/.'))
		 .pipe(livereload());
});

gulp.task("stylesheets", function() {
  gulp.src("./css/main.css")
    .pipe(cssnext({
				browsers:['last 2 versions']
    }))
    .pipe(gulp.dest("./css/main2"))
});

gulp.task('watch', function(){
	livereload.listen(),
	gulp.watch('css/sass/*.scss', ['css']);
	gulp.watch('js/*.js', ['buildJs']);
});

gulp.task('default', ['jshint', 'buildJs', 'imageMin', 'watch']);
