"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MazeRunner_1 = require("./MazeRunner");
const result = (0, MazeRunner_1.mazeRunner)([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
], ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]);
console.log(result);
//# sourceMappingURL=main.js.map