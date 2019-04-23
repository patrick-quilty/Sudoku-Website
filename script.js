let Cells = [];
let Combo = [];
let Board = [];
const Groups = [];
const Relations = [];
let ClearedCount = 0;
let OutText = [];
let Guess = false;
let Complete = false;
let SolveTime = 0;

// Initial Functions
function groupsDecs() {
  // Cells
  Cells = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
    41, 42, 43, 44, 45, 46, 47, 48, 49,
    51, 52, 53, 54, 55, 56, 57, 58, 59,
    61, 62, 63, 64, 65, 66, 67, 68, 69,
    71, 72, 73, 74, 75, 76, 77, 78, 79,
    81, 82, 83, 84, 85, 86, 87, 88, 89,
    91, 92, 93, 94, 95, 96, 97, 98, 99
  ];

  // Rows
  Groups[0]  = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  Groups[1]  = [21, 22, 23, 24, 25, 26, 27, 28, 29];
  Groups[2]  = [31, 32, 33, 34, 35, 36, 37, 38, 39];
  Groups[3]  = [41, 42, 43, 44, 45, 46, 47, 48, 49];
  Groups[4]  = [51, 52, 53, 54, 55, 56, 57, 58, 59];
  Groups[5]  = [61, 62, 63, 64, 65, 66, 67, 68, 69];
  Groups[6]  = [71, 72, 73, 74, 75, 76, 77, 78, 79];
  Groups[7]  = [81, 82, 83, 84, 85, 86, 87, 88, 89];
  Groups[8]  = [91, 92, 93, 94, 95, 96, 97, 98, 99];
  
  // Columns
  Groups[9]  = [11, 21, 31, 41, 51, 61, 71, 81, 91];
  Groups[10] = [12, 22, 32, 42, 52, 62, 72, 82, 92];
  Groups[11] = [13, 23, 33, 43, 53, 63, 73, 83, 93];
  Groups[12] = [14, 24, 34, 44, 54, 64, 74, 84, 94];
  Groups[13] = [15, 25, 35, 45, 55, 65, 75, 85, 95];
  Groups[14] = [16, 26, 36, 46, 56, 66, 76, 86, 96];
  Groups[15] = [17, 27, 37, 47, 57, 67, 77, 87, 97];
  Groups[16] = [18, 28, 38, 48, 58, 68, 78, 88, 98];
  Groups[17] = [19, 29, 39, 49, 59, 69, 79, 89, 99];

  // Boxes
  Groups[18] = [11, 12, 13, 21, 22, 23, 31, 32, 33];
  Groups[19] = [14, 15, 16, 24, 25, 26, 34, 35, 36];
  Groups[20] = [17, 18, 19, 27, 28, 29, 37, 38, 39];
  Groups[21] = [41, 42, 43, 51, 52, 53, 61, 62, 63];
  Groups[22] = [44, 45, 46, 54, 55, 56, 64, 65, 66];
  Groups[23] = [47, 48, 49, 57, 58, 59, 67, 68, 69];
  Groups[24] = [71, 72, 73, 81, 82, 83, 91, 92, 93];
  Groups[25] = [74, 75, 76, 84, 85, 86, 94, 95, 96];
  Groups[26] = [77, 78, 79, 87, 88, 89, 97, 98, 99];

  // Cells and every Cell they are in the same Groups with, plus 100 to contain whether their relations have been cleared or not
  Relations[11] = [12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 31, 32, 33, 41, 51, 61, 71, 81, 91, 100];
  Relations[12] = [11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 31, 32, 33, 42, 52, 62, 72, 82, 92, 100];
  Relations[13] = [11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 31, 32, 33, 43, 53, 63, 73, 83, 93, 100];
  Relations[14] = [11, 12, 13, 15, 16, 17, 18, 19, 24, 25, 26, 34, 35, 36, 44, 54, 64, 74, 84, 94, 100];
  Relations[15] = [11, 12, 13, 14, 16, 17, 18, 19, 24, 25, 26, 34, 35, 36, 45, 55, 65, 75, 85, 95, 100];
  Relations[16] = [11, 12, 13, 14, 15, 17, 18, 19, 24, 25, 26, 34, 35, 36, 46, 56, 66, 76, 86, 96, 100];
  Relations[17] = [11, 12, 13, 14, 15, 16, 18, 19, 27, 28, 29, 37, 38, 39, 47, 57, 67, 77, 87, 97, 100];
  Relations[18] = [11, 12, 13, 14, 15, 16, 17, 19, 27, 28, 29, 37, 38, 39, 48, 58, 68, 78, 88, 98, 100];
  Relations[19] = [11, 12, 13, 14, 15, 16, 17, 18, 27, 28, 29, 37, 38, 39, 49, 59, 69, 79, 89, 99, 100];

  Relations[21] = [11, 12, 13, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 41, 51, 61, 71, 81, 91, 100];
  Relations[22] = [11, 12, 13, 21, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 42, 52, 62, 72, 82, 92, 100];
  Relations[23] = [11, 12, 13, 21, 22, 24, 25, 26, 27, 28, 29, 31, 32, 33, 43, 53, 63, 73, 83, 93, 100];
  Relations[24] = [14, 15, 16, 21, 22, 23, 25, 26, 27, 28, 29, 34, 35, 36, 44, 54, 64, 74, 84, 94, 100];
  Relations[25] = [14, 15, 16, 21, 22, 23, 24, 26, 27, 28, 29, 34, 35, 36, 45, 55, 65, 75, 85, 95, 100];
  Relations[26] = [14, 15, 16, 21, 22, 23, 24, 25, 27, 28, 29, 34, 35, 36, 46, 56, 66, 76, 86, 96, 100];
  Relations[27] = [17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 37, 38, 39, 47, 57, 67, 77, 87, 97, 100];
  Relations[28] = [17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 29, 37, 38, 39, 48, 58, 68, 78, 88, 98, 100];
  Relations[29] = [17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 37, 38, 39, 49, 59, 69, 79, 89, 99, 100];

  Relations[31] = [11, 12, 13, 21, 22, 23, 32, 33, 34, 35, 36, 37, 38, 39, 41, 51, 61, 71, 81, 91, 100];
  Relations[32] = [11, 12, 13, 21, 22, 23, 31, 33, 34, 35, 36, 37, 38, 39, 42, 52, 62, 72, 82, 92, 100];
  Relations[33] = [11, 12, 13, 21, 22, 23, 31, 32, 34, 35, 36, 37, 38, 39, 43, 53, 63, 73, 83, 93, 100];
  Relations[34] = [14, 15, 16, 24, 25, 26, 31, 32, 33, 35, 36, 37, 38, 39, 44, 54, 64, 74, 84, 94, 100];
  Relations[35] = [14, 15, 16, 24, 25, 26, 31, 32, 33, 34, 36, 37, 38, 39, 45, 55, 65, 75, 85, 95, 100];
  Relations[36] = [14, 15, 16, 24, 25, 26, 31, 32, 33, 34, 35, 37, 38, 39, 46, 56, 66, 76, 86, 96, 100];
  Relations[37] = [17, 18, 19, 27, 28, 29, 31, 32, 33, 34, 35, 36, 38, 39, 47, 57, 67, 77, 87, 97, 100];
  Relations[38] = [17, 18, 19, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 39, 48, 58, 68, 78, 88, 98, 100];
  Relations[39] = [17, 18, 19, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 49, 59, 69, 79, 89, 99, 100];

  Relations[41] = [11, 21, 31, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 61, 62, 63, 71, 81, 91, 100];
  Relations[42] = [12, 22, 32, 41, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 61, 62, 63, 72, 82, 92, 100];
  Relations[43] = [13, 23, 33, 41, 42, 44, 45, 46, 47, 48, 49, 51, 52, 53, 61, 62, 63, 73, 83, 93, 100];
  Relations[44] = [14, 24, 34, 41, 42, 43, 45, 46, 47, 48, 49, 54, 55, 56, 64, 65, 66, 74, 84, 94, 100];
  Relations[45] = [15, 25, 35, 41, 42, 43, 44, 46, 47, 48, 49, 54, 55, 56, 64, 65, 66, 75, 85, 95, 100];
  Relations[46] = [16, 26, 36, 41, 42, 43, 44, 45, 47, 48, 49, 54, 55, 56, 64, 65, 66, 76, 86, 96, 100];
  Relations[47] = [17, 27, 37, 41, 42, 43, 44, 45, 46, 48, 49, 57, 58, 59, 67, 68, 69, 77, 87, 97, 100];
  Relations[48] = [18, 28, 38, 41, 42, 43, 44, 45, 46, 47, 49, 57, 58, 59, 67, 68, 69, 78, 88, 98, 100];
  Relations[49] = [19, 29, 39, 41, 42, 43, 44, 45, 46, 47, 48, 57, 58, 59, 67, 68, 69, 79, 89, 99, 100];

  Relations[51] = [11, 21, 31, 41, 42, 43, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 71, 81, 91, 100];
  Relations[52] = [12, 22, 32, 41, 42, 43, 51, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 72, 82, 92, 100];
  Relations[53] = [13, 23, 33, 41, 42, 43, 51, 52, 54, 55, 56, 57, 58, 59, 61, 62, 63, 73, 83, 93, 100];
  Relations[54] = [14, 24, 34, 44, 45, 46, 51, 52, 53, 55, 56, 57, 58, 59, 64, 65, 66, 74, 84, 94, 100];
  Relations[55] = [15, 25, 35, 44, 45, 46, 51, 52, 53, 54, 56, 57, 58, 59, 64, 65, 66, 75, 85, 95, 100];
  Relations[56] = [16, 26, 36, 44, 45, 46, 51, 52, 53, 54, 55, 57, 58, 59, 64, 65, 66, 76, 86, 96, 100];
  Relations[57] = [17, 27, 37, 47, 48, 49, 51, 52, 53, 54, 55, 56, 58, 59, 67, 68, 69, 77, 87, 97, 100];
  Relations[58] = [18, 28, 38, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 59, 67, 68, 69, 78, 88, 98, 100];
  Relations[59] = [19, 29, 39, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 79, 89, 99, 100];

  Relations[61] = [11, 21, 31, 41, 42, 43, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69, 71, 81, 91, 100];
  Relations[62] = [12, 22, 32, 41, 42, 43, 51, 52, 53, 61, 63, 64, 65, 66, 67, 68, 69, 72, 82, 92, 100];
  Relations[63] = [13, 23, 33, 41, 42, 43, 51, 52, 53, 61, 62, 64, 65, 66, 67, 68, 69, 73, 83, 93, 100];
  Relations[64] = [14, 24, 34, 44, 45, 46, 54, 55, 56, 61, 62, 63, 65, 66, 67, 68, 69, 74, 84, 94, 100];
  Relations[65] = [15, 25, 35, 44, 45, 46, 54, 55, 56, 61, 62, 63, 64, 66, 67, 68, 69, 75, 85, 95, 100];
  Relations[66] = [16, 26, 36, 44, 45, 46, 54, 55, 56, 61, 62, 63, 64, 65, 67, 68, 69, 76, 86, 96, 100];
  Relations[67] = [17, 27, 37, 47, 48, 49, 57, 58, 59, 61, 62, 63, 64, 65, 66, 68, 69, 77, 87, 97, 100];
  Relations[68] = [18, 28, 38, 47, 48, 49, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 69, 78, 88, 98, 100];
  Relations[69] = [19, 29, 39, 47, 48, 49, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 79, 89, 99, 100];

  Relations[71] = [11, 21, 31, 41, 51, 61, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 83, 91, 92, 93, 100];
  Relations[72] = [12, 22, 32, 42, 52, 62, 71, 73, 74, 75, 76, 77, 78, 79, 81, 82, 83, 91, 92, 93, 100];
  Relations[73] = [13, 23, 33, 43, 53, 63, 71, 72, 74, 75, 76, 77, 78, 79, 81, 82, 83, 91, 92, 93, 100];
  Relations[74] = [14, 24, 34, 44, 54, 64, 71, 72, 73, 75, 76, 77, 78, 79, 84, 85, 86, 94, 95, 96, 100];
  Relations[75] = [15, 25, 35, 45, 55, 65, 71, 72, 73, 74, 76, 77, 78, 79, 84, 85, 86, 94, 95, 96, 100];
  Relations[76] = [16, 26, 36, 46, 56, 66, 71, 72, 73, 74, 75, 77, 78, 79, 84, 85, 86, 94, 95, 96, 100];
  Relations[77] = [17, 27, 37, 47, 57, 67, 71, 72, 73, 74, 75, 76, 78, 79, 87, 88, 89, 97, 98, 99, 100];
  Relations[78] = [18, 28, 38, 48, 58, 68, 71, 72, 73, 74, 75, 76, 77, 79, 87, 88, 89, 97, 98, 99, 100];
  Relations[79] = [19, 29, 39, 49, 59, 69, 71, 72, 73, 74, 75, 76, 77, 78, 87, 88, 89, 97, 98, 99, 100];

  Relations[81] = [11, 21, 31, 41, 51, 61, 71, 72, 73, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 100];
  Relations[82] = [12, 22, 32, 42, 52, 62, 71, 72, 73, 81, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 100];
  Relations[83] = [13, 23, 33, 43, 53, 63, 71, 72, 73, 81, 82, 84, 85, 86, 87, 88, 89, 91, 92, 93, 100];
  Relations[84] = [14, 24, 34, 44, 54, 64, 74, 75, 76, 81, 82, 83, 85, 86, 87, 88, 89, 94, 95, 96, 100];
  Relations[85] = [15, 25, 35, 45, 55, 65, 74, 75, 76, 81, 82, 83, 84, 86, 87, 88, 89, 94, 95, 96, 100];
  Relations[86] = [16, 26, 36, 46, 56, 66, 74, 75, 76, 81, 82, 83, 84, 85, 87, 88, 89, 94, 95, 96, 100];
  Relations[87] = [17, 27, 37, 47, 57, 67, 77, 78, 79, 81, 82, 83, 84, 85, 86, 88, 89, 97, 98, 99, 100];
  Relations[88] = [18, 28, 38, 48, 58, 68, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 89, 97, 98, 99, 100];
  Relations[89] = [19, 29, 39, 49, 59, 69, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 97, 98, 99, 100];

  Relations[91] = [11, 21, 31, 41, 51, 61, 71, 72, 73, 81, 82, 83, 92, 93, 94, 95, 96, 97, 98, 99, 100];
  Relations[92] = [12, 22, 32, 42, 52, 62, 71, 72, 73, 81, 82, 83, 91, 93, 94, 95, 96, 97, 98, 99, 100];
  Relations[93] = [13, 23, 33, 43, 53, 63, 71, 72, 73, 81, 82, 83, 91, 92, 94, 95, 96, 97, 98, 99, 100];
  Relations[94] = [14, 24, 34, 44, 54, 64, 74, 75, 76, 84, 85, 86, 91, 92, 93, 95, 96, 97, 98, 99, 100];
  Relations[95] = [15, 25, 35, 45, 55, 65, 74, 75, 76, 84, 85, 86, 91, 92, 93, 94, 96, 97, 98, 99, 100];
  Relations[96] = [16, 26, 36, 46, 56, 66, 74, 75, 76, 84, 85, 86, 91, 92, 93, 94, 95, 97, 98, 99, 100];
  Relations[97] = [17, 27, 37, 47, 57, 67, 77, 78, 79, 87, 88, 89, 91, 92, 93, 94, 95, 96, 98, 99, 100];
  Relations[98] = [18, 28, 38, 48, 58, 68, 77, 78, 79, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 99, 100];
  Relations[99] = [19, 29, 39, 49, 59, 69, 77, 78, 79, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 100];

  // Accepts numbers 0-245 because 246 is the number of unique 2-4 digit number(1-9) combinations\
  // Used to concisely search through combinations of numbers or groups
  // Every 4 digit combination has an opposite 5 digit combination so searching through 5 is unnecessary
  Combo = [
    12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26,
    27, 28, 29, 34, 35, 36, 37, 38, 39, 45, 46, 47,
    48, 49, 56, 57, 58, 59, 67, 68, 69, 78, 79, 89,
    123, 124, 125, 126, 127, 128, 129, 134, 135, 136, 137, 138, 139, 145,
    146, 147, 148, 149, 156, 157, 158, 159, 167, 168, 169, 178, 179, 189,
    234, 235, 236, 237, 238, 239, 245, 246, 247, 248, 249, 256, 257, 258,
    259, 267, 268, 269, 278, 279, 289, 345, 346, 347, 348, 349, 356, 357, 
    358, 359, 367, 368, 369, 378, 379, 389, 456, 457, 458, 459, 467, 468, 
    469, 478, 479, 489, 567, 568, 569, 578, 579, 589, 678, 679, 689, 789,
    1234, 1235, 1236, 1237, 1238, 1239, 1245, 1246, 1247, 1248, 1249, 1256, 1257, 1258,
    1259, 1267, 1268, 1269, 1278, 1279, 1289, 1345, 1346, 1347, 1348, 1349, 1356, 1357,
    1358, 1359, 1367, 1368, 1369, 1378, 1379, 1389, 1456, 1457, 1458, 1459, 1467, 1468,
    1469, 1478, 1479, 1489, 1567, 1568, 1569, 1578, 1579, 1589, 1678, 1679, 1689, 1789,
    2345, 2346, 2347, 2348, 2349, 2356, 2357, 2358, 2359, 2367, 2368, 2369, 2378, 2379,
    2389, 2456, 2457, 2458, 2459, 2467, 2468, 2469, 2478, 2479, 2489, 2567, 2568, 2569,
    2578, 2579, 2589, 2678, 2679, 2689, 2789, 3456, 3457, 3458, 3459, 3467, 3468, 3469,
    3478, 3479, 3489, 3567, 3568, 3569, 3578, 3579, 3589, 3678, 3679, 3689, 3789, 4567,
    4568, 4569, 4578, 4579, 4589, 4678, 4679, 4689, 4789, 5678, 5679, 5689, 5789, 6789
  ];
}
function boardSetup() {
  let textAreaString = "";
  for (let x = 0; x <= 80; x++) {
    textAreaString += `
      <input type="text" name="txt${Cells[x]}" class="txt txt${Cells[x]} ${(x % 3 == 0 && x % 9 != 0) ? "extraLeft" : ""} ${(parseInt(x / 9) == 3 || parseInt(x / 9) == 6) ? "extraTop" : ""}">
    `;
  }
  $('.board').html(textAreaString);
  // Initialize and place TextAreas


  $('.output').html(`<textarea class="outputText"></textarea>`);
  // Initialize and place output TextArea

  let buttonString = "";
  buttonString = `
    <button class="button" id="input"><span class="button input">Input</span></button>
    <button class="button" id="clear"><span class="button clear">Clear</span></button>
    <button class="button" id="solve"><span class="button solve">Solve</span></button>
  `;
  $('.controls').html(buttonString);
  // Initialize and place Buttons

}
function handleButtonPress() {
  // Tells the page to call a function based on the button clicked
  $('.controls').on('click', 'button', function(event) {
    event.preventDefault();

    switch(event.currentTarget.id) {
      case 'input': window['inputBoard'](); break;
      case 'clear': window['clearBoard'](); break;
      case 'solve': window['solveBoard'](); break;
    }
  });
  

}

// Board Handling
function createBoardString() {
  // Outputs board into string
  let boardString = '';
  Cells.forEach(function(x) {
    if (Board[x].length > 0) {
        boardString += Board[x];
    } else {
        boardString += '.';
    }
  });
  OutText.push(`Copy and paste Game Code into the top left cell and hit Input to reload the board.\nGame Code:\n\n${boardString}\n\nSolution:`);
}
function inputBoard() {
  // If importing a game string then break up the string and assign it to the Board array
  // If not then just assign to the Board array
  if ($('.txt11').val().length == 81) {
    Cells.reverse().forEach(function(x) {
      Board[x] = $('.txt11').val()[80 - Cells.indexOf(x)];
    });
    Cells.reverse();
  } else {
    Cells.forEach(function(x) {
      Board[x] = $(`.txt${x}`).val();
    });
  }
  outputBoard();
}
function outputBoard() {
  // Clears every Cell that is not a Number 1 - 9 and prints the rest to the board
  Cells.forEach(function(x) {
    if (Board[x] != "1" && Board[x] != "2" && Board[x] != "3" && 
        Board[x] != "4" && Board[x] != "5" && Board[x] != "6" && 
        Board[x] != "7" && Board[x] != "8" && Board[x] != "9" ) {
          Board[x] = "";
        }
    $(`.txt${x}`).val(Board[x]);
  });
}
function clearBoard() {
  // Clears Board
  ClearedCount = 0;
  $(`.txt`).val('');
}

// Output Tools
function outputText() {
  let finalText = "";
  for (let x = 0; x < OutText.length; x++) {
    finalText += OutText[x];
  }
  $('.outputText').val(finalText);
  console.log(finalText);
}
function assignDefaultValues() {
  // When beginning to solve the board this assigns every blank Cell an open possibility of any Number
  Cells.forEach(function(x) {
    if (Board[x].length != 1) { Board[x] = "123456789"; }
  });
}
function sysOutPrintBoard() {
  // Prints out Board in text/picture format
  let longest = 1;
  for (let x = 0; x <= 80; x++) {
    if (Board[Cells[x]].length > longest) {
      longest = Board[Cells[x]].length;
      if (longest == 9) { x = 99; }
    }
  } // Determines the longest string length of the possibilities of each cell

  let colNums = '     ';
  if (longest % 2 != 0) { colNums = '    '; }
  for (let x = 1; x <= 9; x++) {
      for (let y = 1; y <= longest - 1; y++) {
          if (x == 1) {
              if (y != longest - 1) { colNums += ' '; }
              y++;
          } else { colNums += ' '; }
      }
      colNums += 'x' + x + '  ';
      if (x % 3 == 0) { colNums += ' '; }
  } // Builds the column number labels at the top of the printed board

  let borderGrid = '  ';
  for (let x = 1; x <= 32 + longest * 9; x++) {
      borderGrid += '-';
  } // Assigns the top border, as well as the border after each third row, to the string borderGrid
  
  OutText.push(`\n${colNums}`);
  OutText.push(`\n${borderGrid}`);

  for (let b = 1; b <= 9; b++) {
    let rowString = b + 'x|| ';
    for (let c = 1; c <= 9; c++) {
      switch (longest - Board[b * 10 + c].length) {
        case 0: rowString += Board[b * 10 + c]; break;
        case 1: rowString += Board[b * 10 + c] + ' '; break;
        case 2: rowString += ' ' + Board[b * 10 + c] + ' '; break;
        case 3: rowString += ' ' + Board[b * 10 + c] + '  '; break;
        case 4: rowString += '  ' + Board[b * 10 + c] + '  '; break;
        case 5: rowString += '  ' + Board[b * 10 + c] + '   '; break;
        case 6: rowString += '   ' + Board[b * 10 + c] + '   '; break;
        case 7: rowString += '   ' + Board[b * 10 + c] + '    '; break;
        case 8: rowString += '    ' + Board[b * 10 + c] + '    '; break;
      }
      if (c % 3 == 0 && c != 9) { rowString += ' || '; }
      if (c == 9) { rowString += ' ||'; }
      if (c % 3 != 0) { rowString += ' | '; }
    }// Prints the possibilities for each row, one at a time

    OutText.push(`\n${rowString}`);
    if (b % 3 == 0) {
        OutText.push(`\n${borderGrid}`);
    }// Prints the borders
  }
}
function convertRCBToText(groupNum) {
  // Returns the text name of the Row/Column/Box
  if (groupNum >= 0 && groupNum <= 26) {
    switch (groupNum) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:  return `Row ${groupNum + 1}`;
      case 18: return 'the Top Left Box';
      case 19: return 'the Top Middle Box';
      case 20: return 'the Top Right Box';
      case 21: return 'the Middle Left Box';
      case 22: return 'the Center Box';
      case 23: return 'the Middle Right Box';
      case 24: return 'the Bottom Left Box';
      case 25: return 'the Bottom Middle Box';
      case 26: return 'the Bottom Right Box';
      default: return `Column ${groupNum - 8}`;
    }
  }
  return 'missing data';
}
function addCommasAndAnd(cellNums) {
  // ex. in> "45|46|"           out> "s 45 and 46"
  // ex. in> "32|35|36|38|39|"  out> "s 32, 35, 36, 38, and 39"
  // ex. in> "1|2|7|"           out> "1, 2, and 7"
  // "s ..." so this can be called after a "Cell" without knowing if 1 or many will result
  
  cellNums = cellNums.slice(0, -1);
  if (cellNums.slice(1, 2) == "|") {
    if (cellNums.length > 3) { // Handles 3 or more numbers text to proper english
      do {
        cellNums = cellNums.replace("|", ", ");
      } while (cellNums.includes("|"));
      cellNums = cellNums.slice(0, -1) + "and " + cellNums.slice(-1);
    }
    if (cellNums.length == 3) { // Handles 2 numbers text to proper english
      cellNums = cellNums.replace("|", " and ");
    }
  } else {
    if (cellNums.length > 5) { // Handles 3 or more cells text to proper english
      do {
        cellNums = cellNums.replace("|", ", ");
      } while (cellNums.includes("|"));
      cellNums = "s " + cellNums.slice(0, -2) + "and " + cellNums.slice(-2);
    }
    if (cellNums.length == 5) { // Handles 2 cells text to proper english
      cellNums = "s " + cellNums.replace("|", " and ");
    }
    if (cellNums.length == 2) {
      cellNums = " " + cellNums;
    }
  }
  return cellNums;
}

// Variable Controllers
function whichRCbyCC(cell1, cell2) {
  // Input 2 cell numbers
  // Output the Row or Column they are in, else -1
  // Math:
  if (cell1 / 10 | 0 == cell2 / 10 | 0) { return (cell1 / 10 | 0) - 1; }
  if (cell1 % 10 == cell2 % 10) { return cell1 % 10 - 1 + 9; }
  return -1;
}
function whichRCbyBLL(boxNum, location1, location2) {
  // Input the Box and 2 Locations (0 thur 8) in the Box
  // Output the Row or Column they are in
  // Simplifies having to type nested if then statements
  return whichRCbyCC(Groups[boxNum][location1], Groups[boxNum][location2]);
}


// Solve Method Tools
function clearRelations(cellNumber) {
  // If a Cell only has one possibility then mark that as the solution to that Cell
  // and remove that Number as a possibility from the related Row, Column, and Box
  if ((ClearedCount < 81 && Board[cellNumber].length == 1) && Relations[cellNumber][20] != "Cleared") {
    for (let x = 0; x <= 19; x++) {
      Board[Relations[cellNumber][x]] = Board[Relations[cellNumber][x]].replace("" + Board[cellNumber], "");
      // Removes the solved Number as a possibility from the related Cell
      if (Board[Relations[cellNumber][x]].length == 0) {
        if (Guess) {
          OutText.push("\nUnsolvable puzzle from Trial and Error.  \nReverting to the board before the guess.");
        } else {
          OutText.push("\nError in entered puzzle.  Check Cells " + cellNumber + " and " + Relations[cellNumber][x] + ".\nUnsolvable puzzle.");
          outputText();
        }
        ClearedCount = 82;
        return 1000;
      } // Catches if the entered puzzle has an error that makes it unsolvable
    } // Remove the Number as a possibility from the related Row, Column, and Box
    
    Relations[cellNumber][20] = "Cleared";
    ClearedCount += 1;

    if (ClearedCount == 81) {
        OutText.push("\nCell " + cellNumber + " is " + Board[cellNumber] + ", and that completes the puzzle.");
    } else if (ClearedCount != 82) {
        OutText.push("\nCell " + cellNumber + " is " + Board[cellNumber] + ", so remove " + Board[cellNumber] + " as a possibility from all related Rows, Columns, and Boxes.");
    } // If the puzzle isn't solved then print the removal plan, if it is than print the final number
    return 1;
  }
  return 0;
}
function findNumberInRCB(number, rcbNum) {
  // Finds all the Cells within a Row/Column/Box that contain a Number
  let cells = [];
  for (let location = 0; location <= 8; location++) {
    if (Board[Groups[rcbNum][location]].includes("" + number)) {
      cells[location] = true;
    } else {
      cells[location] = false;
    }
  }
  return cells;
}
function stringNumberInRCB(number, groupNumber){
  // Converts the locations of a number in a group to an int: 1_010,001,100
  let returns;
  test = findNumberInRCB(number, groupNumber);
  returns = 1;
  for (let location = 0; location <= 8; location++) {
    returns *= 10;
    if (test[location]) { returns += 1; }
  }
  return returns;
}
function howManyOfANumberAreSolved(number) {
  // Returns how many of a Number are solved in the whole Board
  let solved = 0;
  for (let x = 11; x <= 99; x++) {
    if (x % 10 == 0) { x++; }
    if (Board[x] == "" + number) { solved++; }
  }
  return solved;
}
function searchCombinations(comboNumber) {
  // Accepts numbers 0-245 because 246 is the number of unique 2-4 digit number(1-9) combinations
  // Returns array[combination of items, 1st item, 2nd item, 3rd item, 4th item, number of items]
  let returns = [0, 0, 0, 0, 0, 0];
  returns[0] = Combo[comboNumber];
  returns[5] = 4;
  if (returns[0] < 790) { returns[5] = 3; }
  if (returns[0] < 90) { returns[5] = 2; }
  // Determines returns[5] (combination size)

  switch (returns[5]) {
    case 2:
      returns[1] = returns[0] / 10 | 0;
      returns[2] = returns[0] % 10;
      break;
    case 3:
      returns[1] = returns[0] / 100 | 0;
      returns[2] = (returns[0] / 10 | 0) % 10;
      returns[3] = returns[0] % 10;
      break;
    case 4:
      returns[1] = returns[0] / 1000 | 0;
      returns[2] = (returns[0] / 100 | 0) % 10;
      returns[3] = (returns[0] / 10 | 0) % 10;
      returns[4] = returns[0] % 10;
      break;
  } // Isolates the Numbers to search through into their own variables
  return returns;
}
function rcbOverlap(rcNum, boxNum) {
  // Finds the Cells that overlap between a Row/Column and a Box
  let cells = [0, 0, 0];
  for (let p = 0; p <= 8; p++) {
    for (let q = 0; q <= 8; q++) {
      if (Groups[rcNum][p] == Groups[boxNum][q]) {
        cells[0] = Groups[rcNum][p];
        cells[1] = Groups[rcNum][p + 1];
        cells[2] = Groups[rcNum][p + 2];
        return cells;
      }
    }
  }
  return cells;
}
function findSubgroupOverlap(cells, boxNum) {
  // Find all the instances in a Box of at least 2 Cells
  // in the same Row/Column that contain the Number
  let rcNum = [0, 0, 0, 0, 0, 0];

  for (let subGroup = 0; subGroup <= 5; subGroup++) {
    let subCell = [0, 0, 0];
    switch (subGroup / 3) {
      case 0: // Checks the 3 Rows in the Box
        for (let y = 0; y <= 2; y++) {
          if (cells[3 * subGroup + y]) { subCell[y] = 1; }
        }
        if (subCell[0] + subCell[1] + subCell[2] >= 2) {
          rcNum[subGroup] = whichRCbyBLL(boxNum, 3 * subGroup, 3 * subGroup + 1);
        }
        break;
      case 1: // Checks the 3 Columns in the Box
        for (let y = 0; y <= 2; y++) {
          if (cells[subGroup % 3 + 3 * y]) { subCell[y] = 1; }
        }
        if (subCell[0] + subCell[1] + subCell[2] >= 2) {
          rcNum[subGroup] = whichRCbyBLL(boxNum, subGroup % 3, subGroup % 3 + 3);
        }
        break;
    }
  }
  return rcNum;
}
function evaluateSubgroupOverlap(rcNum, number, boxNum, boxCells) {
  // If a subgroup of Cells must contain a Number then remove the Number
  // from the possibilities of the rest of the Row/Column or Box
  let changes = false;
  let trials = []; // The Row/Column number or the Box number to search through
  let tests  = []; // The boolean Number locations in the Row/Column or the Box
  let rcCells = [];
  for (let x = 0; x <= 5; x++) {
    if (rcNum[x] != 0) {
      rcCells = findNumberInRCB(number, rcNum[x]);
      // Find all the Cells within the Row/Column that contain the Number

      let overlappingCells = rcbOverlap(rcNum[x], boxNum);
      // Find the Cells that overlap between the Row/Column and the Box

      for (let z = 0; z <= 1; z++) { // Checks the Row/Column the first time through then the Box the next
        let onlyInstance = true;
       
        for (let y = 0; y <= 8; y++) {
          if (z == 0) { trials[z] = rcNum[x]; } else { trials[z] = boxNum; }
          if (z == 0) { tests[z] = rcCells[y]; } else { tests[z] = boxCells[y]; }
          // Sets the appropriate Group to check (z=0:Row/Column, z=1:Box)

          if (tests[z] && Groups[trials[z]][y] != overlappingCells[0] && Groups[trials[z]][y] != overlappingCells[1] && Groups[trials[z]][y] != overlappingCells[2]) {
            onlyInstance = false;
            y = 8;
          }
        }// Checks if the overlapping Cells are the only instance
        // of that number in either the Row/Column or in the Box

        if (onlyInstance) {
          z = Math.abs(z - 1);
          // Upon finding that the Row/Column(z=0) or Box(z=1) is the only instance of possible cells,
          // the z(0/1) is flipped z(1/0) to check the Box(z=1) or Row/Column(z=0) for a number to remove

          let cellNums = "";
          for (let y = 0; y <= 8; y++) {
            if (z == 0) { trials[z] = rcNum[x]; } else { trials[z] = boxNum; }
            if (z == 0) { tests[z] = rcCells[y]; } else { tests[z] = boxCells[y]; }
            // Sets the appropriate Group to check (z=0:Row/Column, z=1:Box)

            if (tests[z] && Groups[trials[z]][y] != overlappingCells[0] && Groups[trials[z]][y] != overlappingCells[1] && Groups[trials[z]][y] != overlappingCells[2]) {
              if (cellNums == "") { sysOutPrintBoard(); }
              cellNums += Groups[trials[z]][y] + "|";
              Board[Groups[trials[z]][y]] = Board[Groups[trials[z]][y]].replace("" + number, "");
            // Remove the Number if it is a possibility
            }
 
          }
          z = Math.abs(z - 1);
          // Flips z(1/0) back so we can reference the initial group correctly,
          // or search again if necessary
          if (cellNums != "") {
            changes = true;
            boxCells = findNumberInRCB(number, boxNum);
          // Resets array after finding interaction
          OutText.push("\nIn " + convertRCBToText(trials[z]) + ", the Number " + number + " must be in " + convertRCBToText(trials[Math.abs(z - 1)]) + ", so remove " + number + " as a possibility from Cell" + addCommasAndAnd(cellNums) + ".");
          } // Prints the removed Numbers
        }// If the overlapping Cells are the only instances then remove that Number
        // from the possibilities from the rest of either the Box or Row/Column
      }
    }
  }
  return changes;
}
function findSubset(cells) {
  // Finds a subset in the Row/Column/Box if there is one
  let returns = [];
  let cap = 1000000000;

  let cell = [];
  let howMany = [];
  for (let number = 1; number <= 9; number++) {
    cell[number] = 1;
    howMany[number] = 0;
    for (let location = 0; location <= 8; location++) {
      cell[number] *= 10;
      if (cells[number][location]) { cell[number] += 1; howMany[number] += 1; }
    }
    cell[number] -= cap;
  } // Converts boolean cells[number][location] to int cell[number] = 010,101,011
  // to add later easier and also counts how many possibilities for each number

  for (let x = 0; x <= 245; x++) {

    returns = searchCombinations(x);
    let setSize = returns[5];
    // Isolates the Numbers to search through into their own variables

    let check = true;
    for (let y = 1; y <= setSize; y++) {
      if (howMany[returns[y]] == 1 || howMany[returns[y]] > setSize) { check = false; }
    } // Verifies the Cell is not solved already and that the Number
      // has the right amount of possible locations in the group

    if (check) { // If all the above criteria is met then check if the Numbers form a subset
      returns[0] = setSize;

      for (let y = 0; y <= setSize; y++) {
        returns[5] += cell[returns[y]];
      }
      returns[5] += cap;
      
      let comp = "" + returns[5];
      do {
        comp = comp.replace("0", "");
      } while (comp.includes("0"));
      // Determines how many different locations exist within the Row/Column for the Numbers provided
      if (comp.length - 1 == setSize) { return returns; }
    }
  }
  for (let x = 0; x <= 5; x++) {
    returns[x] = 0;
  } // Returns 0 for everything if a subset is not found
  return returns;
}
function evaluateSubset(subset, cells, rcbNum) {
  // If the Cells in the subset contain Numbers not in the subset then remove those Numbers
  let changes = false;

  let sReplace = "123456789";
  sReplace = sReplace.replace("" + subset[1], "");
  sReplace = sReplace.replace("" + subset[2], "");
  sReplace = sReplace.replace("" + subset[3], "");
  sReplace = sReplace.replace("" + subset[4], "");
  // Creates a string of the Numbers not in the subset

  let cellNums = "";
  for (let x = 0; x <= 8; x++) {
    if (cells[subset[1]][x] || cells[subset[2]][x] || cells[subset[3]][x] || cells[subset[4]][x]) {
    // If x is a location of a Cell in the subset

      for (let y = 0; y < sReplace.length; y++) {
        if (Board[Groups[rcbNum][x]].includes(sReplace.slice(y, y + 1))) {
        // If the Cell contains a Number not in the subset

          if (cellNums == "") {
            sysOutPrintBoard();
            let locations = "" + subset[5];
            for (let z = 1; z <= 9; z++) {
              if (locations.slice(z, z + 1) != "0") {
                cellNums += Groups[rcbNum][z - 1] + "|";
              } // Mark the locations of the Cells in the subset
            }
          }
          Board[Groups[rcbNum][x]] = Board[Groups[rcbNum][x]].replace(sReplace.slice(y, y + 1), "");
          // Remove the Number
          changes = true;
        }
      }
    }
  } // Clears the Cells in the subset of Numbers not in the subset

  if (cellNums != "") {
    let subNums = subset[1] + "|" + subset[2] + "|";
    if (subset[3] != 0) { subNums += subset[3] + "|"; }
    if (subset[4] != 0) { subNums += subset[4] + "|"; }
    OutText.push("\nIn " + convertRCBToText(rcbNum) + ", the numbers " + addCommasAndAnd(subNums) + " form a Subset, so clear the rest of Cell" + addCommasAndAnd(cellNums) + ".");
  } // Prints the removed Numbers
  return changes;
}
function findAndEvaluateChain(sCombo, rowsOrColumns, number) {
  // Compares the Rows or Columns and if there is a chain then clear the chain
  let results = false;

  let chainSize = sCombo[5];
  let groupsChecks = [];
  let cap = 1000000000;
  let compare = "";
  let check = true;
  let rcNumLocations = [];

  for (let y = 1; y <= chainSize; y++) {

    rcNumLocations[y] = (sCombo[y] - 1) + (9 * rowsOrColumns);
    // Converts the 1-9(combo number) to the Row or Column number to check

    groupsChecks[rcNumLocations[y]] = findNumberInRCB(number, rcNumLocations[y]);
    // Gets the boolean locations of the number in the Row or Column

    rcNumLocations[0] = stringNumberInRCB(number, rcNumLocations[y]);
    // Converts the boolean locations to int 1_010,001,100 format for easier comparison

    rcNumLocations[y] = rcNumLocations[0] - cap;
    compare = "" + rcNumLocations[y];
    do {
      compare = compare.replace("0", "");
    } while (compare.includes("0"));
    if (compare.length == 1) { check = false; }
    // Checks if the Number is already solved in any of the Rows or Columns
    // If so then skip this combination

  }// Designates the different ways to handle the data in the method

  rcNumLocations[0] = 0;
  for (let y = 1; y <= chainSize; y++) {
    rcNumLocations[0] += rcNumLocations[y];
  }
  compare = "" + rcNumLocations[0];
  do {
    compare = compare.replace("0", "");
  } while (compare.includes("0"));
  // Determines how many different Columns/Rows the Number is in of the Row/Columns being checked

  if (compare.length == chainSize && check && chainSize != 9 - howManyOfANumberAreSolved(number)) {
    // If the Number of possible locations matches the chain size and
    // if the Number is not solved in any of the Rows/Columns and
    // if the chain is not all of the Cells left that contain the Number

    rcNumLocations[0] += cap;
    compare = "" + rcNumLocations[0];
    let switchRC = [];
    switchRC[0] = -1;
    for (let y = 1; y <= chainSize; y++) {
      for (let z = switchRC[y - 1] % 9 + 2; z <= compare.length; z++) {
        if (compare.slice(z, z + 1) != "0") {
          switchRC[y] = rowsOrColumns == 0 ? z + 8 : z - 1;
          groupsChecks[switchRC[y]] = findNumberInRCB(number, switchRC[y]);
          z = compare.length;
        }
      }
    } // Figures out the Columns or Rows that the Rows or Columns form the chain in

    let resultCells = "";
    for (let y = 1; y <= chainSize; y++) {
      for (let location = 0; location <= 8; location++) {
        if (groupsChecks[switchRC[y]][location]) {
          // Finds all the locations of the Number in the Columns or Rows

          check = true;
          for (let z = 1; z <= chainSize; z++) {
            if (location + 1 == sCombo[z]) {
              check = false;
              z = chainSize;
            }
          } // Determines if the location is in the Rows or Columns in the chain

          if (check) {
            if (resultCells == "") { sysOutPrintBoard(); }
            resultCells += Groups[switchRC[y]][location] + "|";
            Board[Groups[switchRC[y]][location]] = Board[Groups[switchRC[y]][location]].replace("" + number, "" );
          } // If the location is not in the chain then it removes it from that Cell
        }
      }
    } // Removes the Number as a possibility from the Columns or Rows not in the chain

    if (resultCells != "") {
      let rcTag = "";
      let switchTag = "";
      for (let y = 1; y <= chainSize; y++) {
        rcTag += sCombo[y] + "|";
        switchTag += switchRC[y] + (rowsOrColumns == 1 ? + 1 : - 8) + "|";
      }
      rcTag = addCommasAndAnd(rcTag);
      switchTag = addCommasAndAnd(switchTag);
      OutText.push("\nIn " + (rowsOrColumns == 0 ? "Rows " : "Columns ") + rcTag + ", the Number " + number + " forms a Chain in " + (rowsOrColumns == 1 ? "Rows " : "Columns ") + switchTag + ", so remove " + number + " as a possibility from Cell" + addCommasAndAnd(resultCells) + ".");
      results = true;
    } // Prints the removed Numbers
  }
  return results;
}

// Solve Method Schemes
function solveBoard() {
  // Solves the puzzle, if solvable, and details the steps taken
  if (ClearedCount == 0) {
    SolveTime = new Date().getTime();
    OutText.length = 0;
    Guess = false;
    Complete = false;
    groupsDecs();
    inputBoard();
    createBoardString();
    assignDefaultValues();
    clearAllRelations();
    sysOutPrintBoard();
  } // First time board setup

  // Put brute force here if board empty, call show path

  let test = [];
  while (true) {
    let test = [];
    test[0] = clearAllRelations();
    if (ClearedCount > 80) { break; }
    test[1] = onlyInGroup();
    if (ClearedCount > 80) { break; }
    test[2] = rcbInteraction();
    test[3] = singleGroupMultipleNumbersSubset();
    test[4] = multipleGroupsSingleNumberChain();
    if (!test[0] && !test[1] && !test[2] && !test[3] && !test[4]) { break; }
  }; // Main Logic based solve methods

  if (!Guess && ClearedCount < 81 && ClearedCount > 0) {
    OutText.push("\nThe main logical methods have been exhausted.");
    guess();
  } // Trial And Error solve method

  if (ClearedCount == 81 && !Complete) {
    sysOutPrintBoard();
    outputBoard();
    Complete = true;
    ClearedCount = 0;
    let totalTime = new Date().getTime() - SolveTime;
    let time = totalTime / 1000;
    OutText.push("\nPuzzle solved in " + time + " seconds.");
    outputText();
    OutText.length = 0;
  } // When the puzzle is finished print everything out
  
  if (!Guess && ClearedCount == 82) { ClearedCount = 0; }
  // If error in entered puzzle then reset to let them try again
}
function clearAllRelations() {
  // Check if every solved Cell has had their relations cleared
  let returns = false;
  let iChanges;
  do {
    iChanges = 0;
    Cells.forEach(function(x) {
      iChanges += clearRelations(x);
      if (iChanges > 999) { return false; }
    }); // Clear the relations for every cell
    if (iChanges > 0) { returns = true; }
  } while (iChanges > 0);
  return returns;
}
function onlyInGroup() {
  // If a Number can only be in one Cell in a Row/Column/Box then assign that Number to that Cell
  let returns = false;
  let changes = false;
  do {
    changes = false;
    for (let number = 1; number <= 9; number++) {
      for (let rcbNum = 0; rcbNum <= 26; rcbNum++) {
        let cells = findNumberInRCB(number, rcbNum);
        // Finds all the Cells that contain the Number in the Row/Column/Box
        let instances = [];
        instances[1] = 0;
        for (let location = 0; location <= 8; location++) {
          if (cells[location]) {
              instances[0] = location;
              instances[1] += 1;
          }
        } // Checks how many Cells can contain the Number in the Row/Column/Box

        if (instances[1] == 1 && Board[Groups[rcbNum][instances[0]]].length > 1) {
          Board[Groups[rcbNum][instances[0]]] = "" + number;
          OutText.push("\nCell " + Groups[rcbNum][instances[0]] + " is the only Cell in " + convertRCBToText(rcbNum) + " that can be " + number + ".  So Cell " + Groups[rcbNum][instances[0]] + " is " + number + ".");
          // Prints the removed Numbers

          changes = true;

          clearAllRelations();
          if (ClearedCount == 82) { return false; }
          // Checks if the removed Numbers allowed the puzzle to be solved by an easier method
        } // If the Number can only be in one Cell and the Cell is not solved already then assign it
      }
    }
    if (changes) { returns = true; }
  } while (changes);
  return returns;
}
function rcbInteraction() {
  // If there are 2/3 Cells, in a Row/Column within the same Box, that a Number must be in because of the
  // Row/Column or the Box then remove that Number as a possibility from either the Box or Row/Column
  let changes = false;
  for (let number = 1; number <= 9; number++) {
    for (let boxNum = 18; boxNum <= 26; boxNum++) {
      let boxCells = findNumberInRCB(number, boxNum);
      // Find all the Cells within the Box that contain the Number

      let rcNum = findSubgroupOverlap(boxCells, boxNum);
      // Find all the instances in the Box of at least 2 Cells
      // in the same Row/Column that contain the Number

      let subChanges = evaluateSubgroupOverlap(rcNum, number, boxNum, boxCells);
      // If the subgroup of Cells must contain the Number then remove the Number
      // from the possibilities of either the rest of the Row/Column or the Box

      if (subChanges) { changes = true; }
    }
  }
  return changes;
}
function singleGroupMultipleNumbersSubset() {
  // If, in a Row/Column/Box, a group of possible Numbers form a subset then
  // remove the possible Numbers in those Cells that aren't in the subset
  let changes = false;
  let cells = [];
  for (let rcbNum = 0; rcbNum <= 26; rcbNum++) {
    for (let number = 0; number <= 9; number++) {
      cells[number] = findNumberInRCB(number, rcbNum);
    } // Find all the Cells within the Row/Column/Box that contain each Number

    let subset = findSubset(cells);
    // Finds a subset in the Row/Column/Box if there is one

    if (subset[0] != 0) { changes = evaluateSubset(subset, cells, rcbNum); }
    // If the Cells in the subset contain Numbers not in the subset then remove those Numbers
  }
  return changes;
}
function multipleGroupsSingleNumberChain() {
  // Also known as X-Wing / Swordfish
  // If, in multiple Rows/Columns, a Number is found the same number of times as Columns/Rows that it is in,
  // then those Cells can be said to form a chain.  If the Number can be found in the Columns/Rows of the chain
  // but in Cells not in the chain, then remove the Number as a possibility from those Cells.
  let changes = false;
  for (let rowsOrColumns = 0; rowsOrColumns <= 1; rowsOrColumns++) {
    for (let number = 1; number <= 9; number++) {
      for (let comboNumber = 0; comboNumber <= 245; comboNumber++) {

        let sCombo = searchCombinations(comboNumber);
        // Picks the Rows or Columns to compare

        let test = findAndEvaluateChain(sCombo, rowsOrColumns, number);
        if (test) { changes = true; }
        // Compares the Rows or Columns and if there is a chain then clear the chain
      }
    }
  }
  return changes;
}



function guess() {
  if (!Guess) {
    OutText.push("\n\n\nBegin Trial and Error.\n\n");
    Guess = true;
  }
  
  let guessBoard = [];
  let guessRelations = [];

  let guessClearedCount = ClearedCount;

  for (let x = 11; x <= 99; x++) {
    if (x % 10 == 0) { x++; }
    guessBoard[x] = Board[x];
    guessRelations[x] = Relations[x][20];
  } // Transfer current Board and Relations to guessBoard and guessRelations for storage

  for (let x = 11; x <= 99; x++) {
    if (x % 10 == 0) { x++; }
    if (Board[x].length == 2 && ClearedCount != 81) {
      sysOutPrintBoard();
      Board[x] = Board[x].slice(0, 1);
      OutText.push("\nLet's make Cell " + x + " the Number " + Board[x] + ".");
      solveBoard();
      // Pick a 2 possibility Cell and select the first option

      if (ClearedCount == 82) {
        // If that causes an unsolvable puzzle then the second option is definitely right
        for (let y = 11; y <= 99; y++) {
          if (y % 10 == 0) { y++; }
          Board[y] = guessBoard[y];
          Relations[y][20] = guessRelations[y];
        } // Transfer guessBoard and guessRelations back to Board and Relations from storage
        ClearedCount = guessClearedCount;

        sysOutPrintBoard();
        OutText.push("\nSince Cell " + x + " as the Number " + Board[x].slice(0, 1) + " causes the puzzle to become unsolvable, Cell " + x + " must be " + Board[x].slice(1, 2) + " instead.");
        Board[x] = Board[x].slice(1, 2);
        solveBoard();

        if (ClearedCount == 82) {
          OutText.push("\nAny entry for Cell " + x + " results in an unsolvable puzzle.  Check if the puzzle was entered correctly.")
        }
      }
    }
  } // If the puzzle can be solved by guessing at Cells with 2 options then solve it

  for (let x = 11; x <= 99; x++) {
    if (x % 10 == 0) { x++; }
    if (Board[x].length == 3 && ClearedCount != 81) {
      sysOutPrintBoard();
      Board[x] = Board[x].slice(0, 1);
      OutText.push("\nLet's make Cell " + x + " the Number " + Board[x] + ".");
      solveBoard();
      // Pick a 3 possibility Cell and select the first option

      if (ClearedCount == 82) {
        // If that causes an unsolvable puzzle then try the second option
        for (let y = 11; y <= 99; y++) {
            if (y % 10 == 0) { y++; }
            Board[y] = guessBoard[y];
            Relations[y][20] = guessRelations[y];
        } // Transfer guessBoard and guessRelations back to Board and Relations from storage
        ClearedCount = guessClearedCount;

        sysOutPrintBoard();
        Board[x] = Board[x].slice(1, 2);
        OutText.push("\nLet's make Cell " + x + " the Number " + Board[x] + ".");
        solveBoard();
        // Pick a 3 possibility Cell and select the first option

        if (ClearedCount == 82) {
          // If that causes an unsolvable puzzle then the third option is definitely right
          for (let y = 11; y <= 99; y++) {
            if (y % 10 == 0) { y++; }
            Board[y] = guessBoard[y];
            Relations[y][20] = guessRelations[y];
          } // Transfer guessBoard and guessRelations back to Board and Relations from storage
          ClearedCount = guessClearedCount;

          sysOutPrintBoard();
          Board[x] = Board[x].slice(2, 3);
          OutText.push("\nSince Cell " + x + " as the Number " + Board[x].slice(0, 1) + " or " + Board[x].slice(1, 2) + " causes the puzzle to become unsolvable, Cell " + x + " must be " + Board[x].slice(2, 3) + " instead.");
          Board[x] = Board[x].slice(2, 3);
          solveBoard();

          if (ClearedCount == 82) {
            OutText.push("\nAny entry for Cell " + x + " results in an unsolvable puzzle.  Check if the puzzle was entered correctly.")
          }
        }
      }
    }
  } // If the puzzle can be solved by guessing at Cells with 3 options then solve it
}






function initialSetup() {
  groupsDecs();
  boardSetup();
  handleButtonPress();

  

}

$(initialSetup);
