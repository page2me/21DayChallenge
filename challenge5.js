const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "", "", "~", "", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["~", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];

let isCurrent = function isCurrent(string){
    let columns;
    columns = GRID[0].length;
    let rows;
    let i = 0;
    while (i < GRID.length) {
        i++;
    }
    rows = i;
    let totalCells = columns * rows;
    let selecColumStr = string[0];
    let selecColumInt = selecColumStr.charCodeAt(0) - 65;
    let selecRow = Number(string[1]) - 1;
    cellContents = GRID[selecRow][selecColumInt] + "";
    return cellContents === "~";
}

console.log(isCurrent('D4'));

//Improved
// let isCurrent = function isCurrent(string){
//     let selecColumStr = string[0];
//     let selecColumInt = selecColumStr.charCodeAt(0) - 65;
//     let selecRow = Number(string[1]) - 1;
//     cellContents = GRID[selecRow][selecColumInt] + "";
//     return cellContents === "~";
// }


