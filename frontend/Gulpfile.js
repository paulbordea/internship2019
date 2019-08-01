const { watch, series, src, dest } = require('gulp');

var concat = require("gulp-concat");
var notify = require("gulp-notify");
var sourcemaps = require("gulp-sourcemaps");

function scripts() {
    return src(["src/**/*.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.js"))
        .pipe(sourcemaps.write())
        .pipe(dest("public/scripts/"))
        .pipe(notify({ message: "JS task finished!" }));
};

function css() {
    return src(["css/**/*.css"])
        .pipe(concat("main.css"))
        .pipe(dest("public/css/"))
        .pipe(notify({ message: "CSS task finished!" }));
};

function images() {
    return src(["images/**/*.jpg", "images/**/*.png"])
        .pipe(dest("public/images/"));
}

function icons() {
    return src(["*.ico"])
        .pipe(dest("public/"));
}

function htmlIndex() {
    return src(["index.html"])
        .pipe(dest("public/"))
        .pipe(notify({ message: "HTML index task finished!" }));
}

function html() {
    return src(["views/**/*.html"])
        .pipe(dest("public/views/"))
        .pipe(notify({ message: "HTML task finished!" }));
}


function config() {
    return src(["web.config"])
        .pipe(dest("public/"))
        .pipe(notify({ message: "Web.config index task finished!" }));
}

exports.build = function() {

    images();
    icons();
    htmlIndex();
    config();
    html();
    css();
    scripts();
};

exports.watch = function() {

    images();
    icons();
    htmlIndex();
    config();
    html();
    css();
    scripts();

    watch('css/**/*.css', css);
    watch('src/**/*.js', scripts);
    watch('views/**/*.html', html);
    watch('index.html', htmlIndex);
};