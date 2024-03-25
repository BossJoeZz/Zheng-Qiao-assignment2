
export function getHeatLevel(width, height, boxClass, heatMap) {
    let update = [...heatMap];
    for (let i = 0; i < height * width; i++) {
        if (boxClass[i] === "box live") {
            update[i] = 9;
        } else if (update[i] > 0) {
            update[i] -= 1;
        }
    }
    return update;
}
export function getLiveCells(width, height, boxClass) {
    let count = 0;
    for (let i = 0; i < height * width; i++) {
        if (boxClass[i] === 'box live') {
            count += 1;
        }
    }
    return count;
}

let possibily = 0.5

function findPossibility(width, height) {
    let poss2 = possibily;
    let full = (width - 2) * (height - 2)
    let corner = 4
    let side = width * height - full - corner
    return 50 / (poss2 * (full * 8 + corner * 3 + side * 5 - width * height) / (width * height))
}


export function getRandomCells(width, height) {
    const update = Array(40 * 40).fill('box');
    for (let i = 0; i < width * height; i++) {
        const possibility = Math.floor(Math.random() * (findPossibility(width, height)));
        if (possibility === 0) {
            update[i] = 'box live';
            for (let row = -1; row <= 1; row++) {
                for (let col = -1; col <= 1; col++) {
                    if (row === 0 && col === 0) {
                        continue;
                    }
                    const newRow = Math.floor(i / width) + row;
                    const newCol = (i % width) + col;

                    if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
                        const neighborIndex = newRow * width + newCol;

                        if (Math.random() < possibily) {
                            update[neighborIndex] = 'box live';
                        }
                    }
                }
            }
        }
    }
    return update;
}
export default function getNextGrid(width, height, prevGrid) {
    //core code
    const update = [...prevGrid];
    for (let i = 0; i < height * width; i++) {
        let liveCount = 0;
        if (Math.floor(i / width) > 0) {
            if (prevGrid[i - width] === "box live") {
                liveCount += 1;
            }
            if (i % width > 0) {
                if (prevGrid[i - width - 1] === "box live") {
                    liveCount += 1;
                }
            }
            if (i % width < width - 1) {
                if (prevGrid[i - width + 1] === "box live") {
                    liveCount += 1;
                }
            }
        }
        if (Math.floor(i / width) < height - 1) {
            if (prevGrid[i + width] === "box live") {
                liveCount += 1
            }

            if (i % width > 0) {
                if (prevGrid[i + width - 1] === "box live") {
                    liveCount += 1;
                }
            }

            if (i % width < width - 1) {
                if (prevGrid[i + width + 1] === "box live") {
                    liveCount += 1;
                }
            }
        }
        if (i % width > 0) {
            if (prevGrid[i - 1] === "box live") {
                liveCount += 1;
            }
        }
        if (i % width < width - 1) {
            if (prevGrid[i + 1] === "box live") {
                liveCount += 1;
            }
        }
        if (prevGrid[i] === "box" && liveCount === 3) {
            update[i] = "box live";
        } else if (prevGrid[i] === "box live") {
            if (liveCount < 2 || liveCount > 3) {
                update[i] = "box";
            }
        }
    }
    return update;
}
