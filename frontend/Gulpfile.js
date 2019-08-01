const { watch, series, src, dest } = require('gulp');

var concat = require("gulp-concat");
var notify = require("gulp-notify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");

function scripts() {
    return src(["src/**/*.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.js"))
        //.pipe(gutil.env.type === "production" ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(dest("dist/scripts/"))
        .pipe(notify({ message: "JS task finished!" }));
};

function css() {
    return src(["css/**/*.css"])
        .pipe(concat("main.css"))
        .pipe(dest("dist/css/"))
        .pipe(notify({ message: "CSS task finished!" }));
};

function images() {
    return src(["images/**/*.jpg", "images/**/*.png"])
        .pipe(dest("dist/images/"));
}

exports.default = function() {
    watch('css/*.css', css);
    watch('src/*.js', scripts);
};

exports.images = images;