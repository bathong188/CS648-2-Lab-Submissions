const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
sass.compiler = require("node-sass");

async function css() {
    return src("src/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("dist/css"));
}

// exports.default = css;
exports.default = function () {
    watch("src/*.scss", css);
};
