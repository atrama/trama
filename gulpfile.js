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

	cssnext = require('gulp-cssnext'),
	cssimport = require('postcss-import'),
	nested = require('postcss-nested');

gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('webp', function(){
    return gulp.src('image/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('img'));
});

gulp.task('imagemin', function(){
	return gulp.src('src/image/')
	.pipe(imagemin())
	.pipe(gulp.dest('img'));
});

gulp.task('css', function(){
	var processors = [
		autoprefixer,
		 cssimport,
		// nested
	];
	return gulp.src('./css/sass/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
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
		 .pipe(gulp.dest('./css/.'))
		 .pipe(livereload({ start: true }));
});

gulp.task("stylesheets", function() {
  gulp.src("./css/main.css")
    .pipe(cssnext({
				browsers:['last 2 versions']
    }))
    .pipe(gulp.dest("./css/main2"))
});

gulp.task('watch', function(){
	livereload.listen({start:true}),
	gulp.watch('css/sass/*.scss', ['css']);
});

gulp.task('default', ['jshint', 'imagemin', 'watch']);
