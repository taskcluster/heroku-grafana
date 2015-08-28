/*! grafana - v2.1.3 - 2015-08-24
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache License */

var jshint=require("gulp-jshint"),stylish=require("jshint-stylish"),gulp=require("gulp");gulp.task("lint",function(){return gulp.src("./draganddrop.js").pipe(jshint()).pipe(jshint.reporter(stylish))}),gulp.task("default",["lint"]);