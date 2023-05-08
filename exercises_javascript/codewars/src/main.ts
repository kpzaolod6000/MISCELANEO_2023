import { G964 } from "./Playingwithdigits";
import { mazeRunner } from "./MazeRunner";

// const result : number = G964.digPow(92,1);
const result: string = mazeRunner(
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ],
  ["N","N","N","N","N","E","E","S","S","S","S","S","S"]
);

console.log(result);
