"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mazeRunner = void 0;
function mazeRunner(maze, directions) {
    let n = maze.length;
    let m = maze[0].length;
    let idx = {
        row: 0,
        col: 0
    };
    maze.forEach((currentValue, index, array) => {
        const idxCol = currentValue.indexOf(2);
        if (idxCol != -1)
            idx = { row: index, col: idxCol };
    });
    let result = "";
    for (let i = 0; i < directions.length; i++) {
        const element = directions[i];
        switch (element) {
            case "N":
                idx.row -= 1;
                break;
            case "E":
                idx.col += 1;
                break;
            case "W":
                idx.col -= 1;
                break;
            case "S":
                idx.row += 1;
                break;
            default:
                break;
        }
        if (idx.row < 0 || idx.row >= n || idx.col < 0 || idx.col >= m || maze[idx.row][idx.col] === 1) {
            result = 'Dead';
            break;
        }
        else if (maze[idx.row][idx.col] === 3) {
            result = 'Finish';
            break;
        }
        else
            result = 'Continue';
    }
    return result === "Continue" ? "Lost" : result;
}
exports.mazeRunner = mazeRunner;
//# sourceMappingURL=MazeRunner.js.map