"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.printAll = function () {
        for (var prop in this) {
            if (prop != "print") {
                console.log("".concat(prop, " - ").concat(eval("this." + prop)));
            }
        }
        console.log('');
    };
    return Movie;
}());
exports.Movie = Movie;
