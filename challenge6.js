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


let lightRow = function lightRow(givenRow){
    let columns;
    columns = GRID[0].length;
    let rows;
    let i = 0;
    let cellContents = [];
    // while (i < GRID.length) {
    //     i++;
    // }
    // rows = i;
    let j = 0;
    while(j < columns) {
        cellContents.push(GRID[givenRow][j] + "");
        j++;
    }
    return cellContents;
}

console.log(lightRow(6));

//Improvement
// let lightRow = function lightRow(givenRow){
//     let columns;
//     columns = GRID[0].length;
//     let cellContents = [];
//     for(j = 0; j < columns; j++)
//         cellContents.push(GRID[givenRow][j] + "");
//     return cellContents;
// }