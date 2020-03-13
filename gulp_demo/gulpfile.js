
var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var bs = require("browser-sync").create()
// var imagemin = require("gulp-imagemin")
// var cache = require("gulp-cache")

// gulp.task('images', function(){
// 	gulp.src('./images/*.*')
// 	.pipe(cache(imagemin()))
// 	.pipe(gulp.dest("./dist/images/"))
// });


// 第一参数：任务名， 第二个参数：任务执行的函数
gulp.task("greet", function(){
	console.log("hello world");
});


gulp.task("css", function(){
	gulp.src("./css/*.css")
	.pipe(cssnano())
	.pipe(rename({"suffix":".min"}))
	.pipe(gulp.dest("./dist/css/"))
	.pipe(bs.stream())
});


gulp.task("js", function(){
	gulp.src("./js/*.js")
	.pipe(concat("index.js"))
	.pipe(uglify({
		'toplevel': true,
		'compress':{
			'drop_console': true
		}
	}))
	.pipe(rename({"suffix":".min"}))
	.pipe(gulp.dest("./dist/js/"))
});


gulp.task("watch",function(){
	gulp.watch("./css/*.css",['css'])
});


gulp.task("bs", function(){
	bs.init({
		'server':{
			'baseDir':'./'
		}
	});
});

gulp.task("default", ['bs', 'watch']);

