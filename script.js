let Cells = [];
let Combo = [];
let Board = [];
let CanBoard = [];
const Groups = [];
const Relations = [];
let ClearedCount = 0;
let OutText = [];
let Instructions = [];
let Guess = false;
let Complete = false;
let Candidates = false;

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
  let textAreaString = `
  <p class="columns">
  <label class="columnBlank">..</label>
  <label class="column">x1</label>
  <label class="column">x2</label>
  <label class="column">x3</label>
  <label class="column">x4</label>
  <label class="column">x5</label>
  <label class="column">x6</label>
  <label class="column">x7</label>
  <label class="column">x8</label>
  <label class="column">x9</label>
  </p>
  `;
  for (let x = 0; x <= 80; x++) {
    if (x % 9 == 0) { 
      textAreaString += `<p class="row"><label class="rowLabel">` + (x / 9 + 1) + `x</label>` 
    }
    textAreaString += `
      <div class="hiContainer">
        <textarea name="txt${Cells[x]}" id="txt${Cells[x]}" style="resize: none" class="txt txt${Cells[x]} ${(x % 3 == 0 && x % 9 != 0) ? "extraLeft" : ""} ${(parseInt(x / 9) == 3 || parseInt(x / 9) == 6) ? "extraTop" : ""}"></textarea>
        <div name="div${Cells[x]}" id="div${Cells[x]}" class="candidateCell div div${Cells[x]} ${(x % 3 == 0 && x % 9 != 0) ? "extraLeft" : ""} ${(parseInt(x / 9) == 3 || parseInt(x / 9) == 6) ? "extraTop" : ""}"></div>
      </div>
    `; // Adds textAreas and divs for highlighting purposes
    if (x % 9 == 8) { 
      textAreaString += `</p><br>` 
    }
  }
  $('.board').html(textAreaString);
  // Initialize and place board TextAreas

  $('.output').html(`
  <textarea class="outputText" id="outputText" readonly>
  Small stuff:
  .Add title tags for all hover elements
  .Add more puzzles and test their actual difficulty
  .Only allow 1-9 input in textareas other than txt11 where allow anything, but cap of 81 characters
  .Maybe move font size slider to above solution area at css width change
  .Handle clicks in the solution area at all other times / add click here message on solution area for the times you want it to be clickable

  Big stuff if plenty of time:
  .Arrowkey navigation
  .Change how subsets are written about in the solution area and how the accompanying highlights turn out
  .Accompanying highlights to solution area
  .Click in textarea remove candidate
  .Tools additions of remove immediate relations, and maybe furthur methods and hints or next move
  .Ensure completely keyboard accessible and tab accessible in all situations
  
  Navel-gazing:
  .Compare to other online solvers/players
  .View other sudoku solvers highlight decisions
  .Change all div highlights to include filler class as background
  .Brute solution area clicking



  </textarea>
  <div class="slideContainer">
    <input type="range" min="1" max="50" value="6" class="slider" id="myRange" title="Solution Box Text Size">
  </div>
  `); // Initialize and place output TextArea and Font Size slider

  let controlsString = "";
  controlsString = `
    <section class="mainButtons">
      <button class="button" id="input">
        <span class="input">Input</span>
      </button>
      <button class="button" id="clear">
        <span class="clear">Clear</span>
      </button>
      <button class="button" id="solve">
        <span class="solve">Solve</span>
      </button>
      <button class="button" id="tools">
        <span class="tools">Tools</span>
      </button>
      <button class="button" id="build">
        <span class="build">Build</span>
      </button>
      <button class="button" id="brute">
        <span class="brute">Brute</span>
      </button>
    </section>
    <section role="region" class="slide toolsSec">
      <form role="form" class="toolsForm">
        <fieldset>
          <button class="numbtnO" id="numbtnO" title="Toggle Candidates for All Cells">
            <span class="numbtnSpan numbtnSpanO">O</span>
          </button>
          <button class="numbtn numbtn1" id="numbtn" name="1">
            <span class="numbtnSpan numbtnSpan1">1</span>
          </button>
          <button class="numbtn numbtn2" id="numbtn" name="2">
            <span class="numbtnSpan numbtnSpan2">2</span>
          </button>
          <button class="numbtn numbtn3" id="numbtn" name="3">
            <span class="numbtnSpan numbtnSpan3">3</span>
          </button>>
          <button class="numbtn numbtn4" id="numbtn" name="4">
            <span class="numbtnSpan numbtnSpan4">4</span>
          </button>
          <button class="numbtn numbtn5" id="numbtn" name="5">
            <span class="numbtnSpan numbtnSpan5">5</span>
          </button>
          <button class="numbtn numbtn6" id="numbtn" name="6">
            <span class="numbtnSpan numbtnSpan6">6</span>
          </button>
          <button class="numbtn numbtn7" id="numbtn" name="7">
            <span class="numbtnSpan numbtnSpan7">7</span>
          </button>
          <button class="numbtn numbtn8" id="numbtn" name="8">
            <span class="numbtnSpan numbtnSpan8">8</span>
          </button>
          <button class="numbtn numbtn9" id="numbtn" name="9">
            <span class="numbtnSpan numbtnSpan9">9</span>
          </button>
          <button class="numbtnX" id="numbtnX" title="Toggle Candidates for Highlighted Cell">
            <span class="numbtnSpan numbtnSpanX">X</span>
          </button>
        </fieldset>
      </form>
    </section>
    <section role="region" class="slide buildSec">
      <form role="form" class="buildForm">
        <fieldset>
          <label class="diff">
            <input type="radio" name="diff" class="radio" value="1" checked/>
            <span class="radSpan">Easy</span>
          </label>
          <label class="diff">
            <input type="radio" name="diff" class="radio" value="2"/>
            <span class="radSpan">Intermediate</span>
          </label>
          <label class="diff">
            <input type="radio" name="diff" class="radio" value="3""/>
            <span class="radSpan">Hard</span>
          </label>
          <label class="diff">
            <input type="radio" name="diff" class="radio" value="4"/>
            <span class="radSpan">Expert</span>
          </label>
          <label class="diff">
            <input type="radio" name="diff" class="radio" value="5"/>
            <span class="radSpan">Trial and Error</span>
          </label>
          <button class="button2" id="create">
            <span class="create">Create</span>
          </button>
        </fieldset>
      </form>
    </section>
    <section role="region" class="slide bruteSec">
      <form role="form" class="bruteForm">
        <fieldset>
          <button class="button3" id="normalBrute">
            <span class="normalBrute">Normal Brute Force</span>
          </button>
          <button class="button3" id="showBrute">
            <span class="showBrute">Show Path Taken</span>
          </button>
        </fieldset>
      </form>
    </section>
  `;
  $('.controls').html(controlsString);
  // Initialize and place Controls

  $(`.slide`).hide();
  $(`.slide`).slideUp();
  // Hides sliders until needed
}
function handleEvents() {
  // Tells the page to call a function based on the button clicked
  $('.controls').on('click', 'button', function(event) {
    event.preventDefault();
    switch(event.currentTarget.id) {
      case 'tools': window['toolsDown'](); break;
      case 'input': window['inputBoard'](); break;
      case 'clear': window['clearBoard'](); break;
      case 'brute': window['bruteDown'](); break;
      case 'normalBrute': window['brute'](false); break;
      case 'showBrute': window['brute'](true); break;
      case 'solve': window['solveBoard'](); break;
      case 'build': window['buildDown'](); break;
      case 'create': window['newPuzzle'](); break;
      case 'numbtnO': window['toggleAllCandidates'](); break;
      // case 'numbtn1', //maybe more here or how do i want to handle this
      case 'numbtnX': window['toggleOneCandidates'](); break;
      case 'numbtn': window['toggleNumber'](event.currentTarget.name); break;
    }
  }); // Buttons

  $('.board').on('click', 'textarea', function(event) {
    event.preventDefault();
    $(`.txt`).removeClass('currentCell');
    $(this).addClass('currentCell');
  }); // Highlights current cell

  $('.controls').on('click', 'img', function(event) {
    event.preventDefault();
    switch(event.currentTarget.id) {
      case 'buildUp': window['buildUp'](); break;
      case 'bruteUp': window['bruteUp'](); break;
      case 'toolsUp': window['toolsUp'](); break;
    }
  }); // Slide up arrow actions

  $('.slider').on('change', function() {
    event.preventDefault();
    let fontSize = $('.slider').val();
    outputText(fontSize);
  }); // Font-size slider

  $('.outputText').on('click', function() {
    event.preventDefault();
    if (OutText.length == 0) { return; }
    let line = $(".outputText")[0];
    line = line.value.substr(0, line.selectionStart).split("\n").length - 1;
    recallBoard(line);
  }); // Gets the line number of the text that was clicked in the output textarea
}
function toggleAllCandidates() {
  // Toggles all candidates
  if (!Candidates) {
    
    inputBoard();
    Cells.forEach(function(x) {
      if (Board[x].length = 0 || (typeof Board[x] != 'undefined')) { Board[x] = "123456789"; }
      if (typeof CanBoard[x] != 'undefined') {
        // if (CanBoard[x] = "") { CanBoard[x] = "123456789"; }
        Board[x] = CanBoard[x].replace(/ /g,'');
        Board[x] = Board[x].replace(/(\r\n|\n|\r)/gm,'');;
        $(`.txt${x}`).val(CanBoard[x]);
      }
    });
  } // Assigns default values the first time

  Cells.forEach(function(x) {
    let test = true;
    if (!Candidates && (typeof CanBoard[x] != 'undefined')) { test = false; }
    if ($(`.div${x}`).html().includes("span")) { test = false; }
    if (test) {
      console.log("here", x);
      if ($(`.txt${x}`).hasClass('candidateCell')) {
        if ($(`.txt${x}`).val().length > 1) { $(`.txt${x}`).val(''); }
        if (Board[x].length == 1) { $(`.txt${x}`).val(Board[x]); }
        $(`.txt${x}`).removeClass('candidateCell');
      } else {
        if ($(`.txt${x}`).val() == "") {
          $(`.txt${x}`).addClass('candidateCell');
          canConvert(x);
        }
      }
    }
    if ($(`.txt${x}`).val().length > 1 && !$(`.txt${x}`).hasClass('candidateCell')) {
      $(`.txt${x}`).addClass('candidateCell');
      canConvert(x);
    }
  });
  Candidates = true;
}
function toggleOneCandidates() {
  // Toggle highlighted cell
  Cells.forEach(function(x) {
    if ($(`.txt${x}`).hasClass('currentCell')) {
      if ($(`.div${x}`).html().includes("span")) { return; }
      if ($(`.txt${x}`).hasClass('candidateCell')) {
        if ($(`.txt${x}`).val().length > 1) { $(`.txt${x}`).val(''); }
        if (Board[x].length == 1) { $(`.txt${x}`).val(Board[x]); }
        $(`.txt${x}`).removeClass('candidateCell');
      } else {
        $(`.txt${x}`).addClass('candidateCell');
        if ((typeof Board[x] == 'undefined') || Board[x] == "") { Board[x] = "123456789"; }
        canConvert(x);
      }
    }
  });
}
function toggleNumber(number) {
  // When number button pressed switch it on or off
  for (let x = 11; x <= 99; x++) {
    if (x % 10 == 0) { x++; }
    if ($(`.txt${x}`).hasClass('currentCell')) {
      if ($(`.txt${x}`).hasClass('candidateCell')) {
        if (Board[x].includes(number)) {
          Board[x] = Board[x].replace(number, "");
        } else {
          Board[x] = Board[x] + number;
          let temp = "123456789";
          for (let y = 1; y <= 9; y++) {
            if (!Board[x].includes(y)) {
              temp = temp.replace(y, "");
            } 
          }
          Board[x] = temp;
        }
        canConvert(x);
      } else {
        Board[x] = number;
        $(`.txt${x}`).val(Board[x]);
      }
      x = 99;
    }
  }
}
function canConvert(cell) {
  // If switching to candidate mode then show the candidates
  CanBoard[cell] = "1 2 3\n4 5 6\n7 8 9";
  for (let x = 1; x <= 9; x++) {
    if (!Board[cell].includes(x)) { CanBoard[cell] = CanBoard[cell].replace(x, " "); }
  }
  $(`.txt${cell}`).val(CanBoard[cell]);
}
function notCandidateMode() {
  // Returns Board to normal settings when needed
  Cells.forEach(function(x) {
    if ($(`.txt${x}`).val().length > 1) { $(`.txt${x}`).val(''); }
    $(`.txt${x}`).removeClass('originalBoard');
    $(`.txt${x}`).removeClass('candidateCell');
    $(`.txt${x}`).removeClass('highlightCell');
    $(`.txt${x}`).removeClass('otherCell');
    $(`.txt${x}`).removeClass('noTouchy');
    $(`.txt${x}`).removeAttr('readonly','true');
  });
  $(`.div`).html('');
}



function recallBoard(line) {
  // Rebuilds the board up to the line clicked based on the output text and highlights the important items from the clicked line
  Candidates = false;
  notCandidateMode();
  let cell;
  let cells;
  let number;
  let numbers;
  let location;
  let rcb = [];
  let highlight;
  let newLine;

  for (let x = 0; x <= line; x++) {
    switch (Instructions[x].slice(0, Instructions[x].indexOf("#"))) {
      case "boardString":
        $('.txt11').val(OutText[x].slice(1));
        inputBoard();
        assignDefaultValues();
        break;
      case "remove related":
        cell = OutText[x].slice(6, 8);
        Board[cell] = OutText[x].slice(12, 13);
        Relations[cell][20] = "Cleared";
        $(`.txt${cell}`).removeClass('candidateCell');
        $(`.txt${cell}`).val(Board[cell]);
        if (x != line) {
          for (let y = 0; y <= 19; y++) {
            Board[Relations[cell][y]] = Board[Relations[cell][y]].replace("" + Board[cell], "");
          }
        }
        break;
      case "must be":
        if (x != line) {
          number = OutText[x].slice(OutText[x].indexOf("Number") + 7);
          number = number.slice(0, 1);
          cells = OutText[x].slice(OutText[x].indexOf("Cell"));
          cells = cells.replace(/,/g, '');
          cells = cells.replace("and", '');
          do {
            location = cells.search(/\d/);
            cell = cells.slice(location, location + 2)
            Board[cell] = Board[cell].replace(number, "");
            cells = cells.slice(location + 3);
          } while (cells.length > 1);
        }
        break;
      case "subset":
        if (x != line) {
          rcb[0] = Instructions[x].slice(Instructions[x].indexOf("#") + 1);
          numbers = rcb[0].slice(rcb[0].indexOf("#") + 1);
          rcb[0] = rcb[0].slice(0, rcb[0].indexOf("#"));
          cells = OutText[x].slice(OutText[x].indexOf("Cell"));
          cells = cells.replace(/,/g, '');
          cells = cells.replace("and", '');
          do {
            location = cells.search(/\d/);
            cell = cells.slice(location, location + 2);
            for (let y = 1; y <= 9; y++) {
              if (!numbers.includes(y) && Board[cell].includes(y)) { Board[cell] = Board[cell].replace(y, ""); }
            }
            cells = cells.slice(location + 3);
          } while (cells.length > 1);
        }
        break;
      case "chain":
        if (x != line) {
          number = OutText[x].slice(OutText[x].indexOf("Number") + 7, );
          number  = number.slice(0, 1);
          cells = OutText[x].slice(OutText[x].indexOf("Cell"));
          cells = cells.replace(/,/g, '');
          cells = cells.replace("and", '');
          do {
            location = cells.search(/\d/);
            cell = cells.slice(location, location + 2)
            Board[cell] = Board[cell].replace(number, "");
            cells = cells.slice(location + 3);
          } while (cells.length > 1);
        }
        break;
    }
  } // Removes everything before the clicked line

  Cells.forEach(function(x) {
    $(`.div${x}`).html('');
    $(`.txt${x}`).removeClass('highlightCell');
    $(`.txt${x}`).removeClass('otherCell');
    $(`.txt${x}`).removeClass('currentCell');
    if (!$(`.txt${x}`).hasClass('originalBoard') && Relations[x][20] != "Cleared") {
      if (!$(`.txt${x}`).hasClass('candidateCell')) { $(`.txt${x}`).addClass('candidateCell'); }
      canConvert(x);
    }
    $(`.txt${x}`).addClass('noTouchy');
    $(`.txt${x}`).attr('readonly','true');
  }); // Shows the candidates for all the cells not solved
  
  switch (Instructions[line].slice(0, Instructions[line].indexOf("#"))) {
    case "remove related":
      cell = OutText[line].slice(6, 8);
      number = Board[cell];
      $(`.txt${cell}`).addClass('highlightCell');
      for (let x = 0; x <= 19; x++) {
        if ($(`.txt${Relations[cell][x]}`).hasClass('candidateCell')) { $(`.txt${Relations[cell][x]}`).addClass('otherCell'); }
        if (Board[Relations[cell][x]].includes(number)) {
          Board[Relations[cell][x]] = Board[Relations[cell][x]].replace("" + Board[cell], "");
          canConvert(Relations[cell][x]);
          // Removes candidate from textArea

          newLine = "<span class=" + "'" + "highlightBoardC" + "'" + ">" + number + "</span>";
          highlight = "123\n456\n789".replace(number, newLine);
          if ((number - 2) % 3 != 0) { 
            newLine = newLine.replace("C", "LR"); 
            highlight = "1 2 3\n4 5 6\n7 8 9".replace(number, newLine);
          }
          $(`.div${Relations[cell][x]}`).html(highlight);
          // Highlights the removed candidate in the beneath div
        }
      }
      break;
    case "only group":
      cell = OutText[line].slice(6, 8);
      number = OutText[line].slice(-2, -1);
      rcb[0] = Instructions[line].slice(Instructions[line].indexOf("#") + 1);
      $(`.txt${cell}`).addClass('highlightCell');
      for (let x = 0; x <= 8; x++) {
        if (Groups[rcb[0]][x] != cell && Board[Groups[rcb[0]][x]].length != 1) { $(`.txt${Groups[rcb[0]][x]}`).addClass('otherCell'); }
      } // Highlights Cells in same row/column/box

      highlight = "123\n456\n789";
      for (let x = 1; x <= 9; x++) {
        newLine = "<span class=" + "'" + "fillerBoardLR" + "'" + ">" + x + "</span>";
        if (Board[cell].includes(x)) {
          newLine = newLine.replace("filler", "other");
          if (x != number) {  
            Board[cell] = Board[cell].replace("" + x, "");
            newLine = newLine.replace("other", "highlight");
          }
        }
        if ((x - 2) % 3 == 0) { newLine = newLine.replace("LR", "C"); }
        highlight = highlight.replace(x, newLine);
      }
      $(`.txt${cell}`).val('');
      $(`.div${cell}`).html(highlight);
      // Highlights candidates in current cell
      break;
    case "must be":
      rcb[0] = Instructions[line].slice(Instructions[line].indexOf("#") + 1);
      rcb[1] = rcb[0].slice(rcb[0].indexOf("#") + 1);
      rcb[0] = rcb[0].slice(0, rcb[0].indexOf("#"));
      for (let x = 0; x <= 8; x++) {
        if (!$(`.txt${Groups[rcb[0]][x]}`).hasClass('originalBoard')) {
          $(`.txt${Groups[rcb[0]][x]}`).addClass('otherCell');
        }
      } // Highlights Cells of first row/column/box

      number = OutText[line].slice(OutText[line].indexOf("Number") + 7);
      number = number.slice(0, 1);
      for (let x = 0; x <= 8; x++) {
        cell = Groups[rcb[1]][x];
        if (Board[cell].includes(number)) {
          Board[cell] = Board[cell].replace(number, "");
          canConvert(cell);
          newLine = "<span class=" + "'" + "highlightBoardC" + "'" + ">" + number + "</span>";
          if ($(`.txt${cell}`).hasClass('otherCell')) { newLine = newLine.replace("highlight", "other"); }
          highlight = "123\n456\n789".replace(number, newLine);
          if ((number - 2) % 3 != 0) { 
            newLine = newLine.replace("C", "LR"); 
            highlight = "1 2 3\n4 5 6\n7 8 9".replace(number, newLine);
          }
          $(`.div${cell}`).html(highlight);
        }
      } // Highlights candidates of second row/column/box
      break;
    case "subset":
      rcb[0] = Instructions[line].slice(Instructions[line].indexOf("#") + 1);
      numbers = rcb[0].slice(rcb[0].indexOf("#") + 1);
      rcb[0] = rcb[0].slice(0, rcb[0].indexOf("#"));
      cells = OutText[line].slice(OutText[line].indexOf("Cell"));
      cells = cells.replace(/,/g, '');
      cells = cells.replace("and", '');
      do {
        location = cells.search(/\d/);
        cell = cells.slice(location, location + 2);
        $(`.txt${cell}`).addClass('highlightCell');
        // Highlight used Cells

        highlight = "123\n456\n789";
        for (let x = 1; x <= 9; x++) {
          newLine = "<span class=" + "'" + "fillerBoardLR" + "'" + ">" + x + "</span>";
          if (Board[cell].includes(x)) {
            newLine = newLine.replace("filler", "other");
            if (!numbers.includes(x)) {  
              Board[cell] = Board[cell].replace("" + x, "");
              newLine = newLine.replace("other", "highlight");
            }
          }
          if ((x - 2) % 3 == 0) { newLine = newLine.replace("LR", "C"); }
          highlight = highlight.replace(x, newLine);
        }
        $(`.txt${cell}`).val('');
        $(`.div${cell}`).html(highlight);
        cells = cells.slice(location + 3);
      } while (cells.length > 1); // Highlight candidates
      for (let x = 0; x <= 8; x++) {
        if ($(`.txt${Groups[rcb[0]][x]}`).val().length > 1) { $(`.txt${Groups[rcb[0]][x]}`).addClass('otherCell'); }
      } // Highlights other subset Cells
      break;
    case "chain":
      number = OutText[line].slice(OutText[line].indexOf("Number") + 7, );
      number  = number.slice(0, 1);

      let rc1 = Instructions[line].slice(Instructions[line].search(/\d/));
      let rc2 = rc1.slice(rc1.indexOf("#") + 1);
      rc1 = rc1.slice(0, rc1.indexOf(rc2) - 1);
      do {
        let rc = rc1.slice(0, rc1.indexOf("|"));
        rc1 = rc1.slice(rc1.indexOf("|") + 1);
        for (let x = 0; x <= 8; x++) {
          if ($(`.txt${Groups[rc][x]}`).hasClass('candidateCell')) { $(`.txt${Groups[rc][x]}`).addClass('otherCell'); }
        }
      } while (rc1.length > 1);
      // Highlight first set of rows/columns

      do {
        let rc = rc2.slice(0, rc2.indexOf("|"));
        rc2 = rc2.slice(rc2.indexOf("|") + 1);
        for (let x = 0; x <= 8; x++) {
          if ($(`.txt${Groups[rc][x]}`).hasClass('candidateCell')) {
            if ($(`.txt${Groups[rc][x]}`).hasClass('otherCell') && Board[Groups[rc][x]].includes(number)) { 
              $(`.txt${Groups[rc][x]}`).removeClass('otherCell');
                $(`.txt${Groups[rc][x]}`).addClass('highlightCell');
                highlight = "1 2 3\n4 5 6\n7 8 9".replace(number, "<span class=" + "'" + "otherBoardLR" + "'" + ">" + number + "</span>");
                if ((number - 2) % 3 == 0) { highlight = "123\n456\n789".replace(number, "<span class=" + "'" + "otherBoardC" + "'" + ">" + number + "</span>"); }
                $(`.div${Groups[rc][x]}`).html(highlight);
                Board[Groups[rc][x]] = Board[Groups[rc][x]].replace(number, "");
                canConvert(Groups[rc][x]);
            } else {
              $(`.txt${Groups[rc][x]}`).addClass('otherCell');
            }
          }
        }
      } while (rc2.length > 1);
      // Highlights the other set of rows/columns and highlights the number in the chain Cells
      
      cells = OutText[line].slice(OutText[line].indexOf("Cell"));
      cells = cells.replace(/,/g, '');
      cells = cells.replace("and", '');
      do {
        location = cells.search(/\d/);
        cell = cells.slice(location, location + 2)
        Board[cell] = Board[cell].replace(number, "");
        canConvert(cell);
        highlight = "1 2 3\n4 5 6\n7 8 9".replace(number, "<span class=" + "'" + "highlightBoardLR" + "'" + ">" + number + "</span>");
        if ((number - 2) % 3 == 0) { highlight = "123\n456\n789".replace(number, "<span class=" + "'" + "highlightBoardC" + "'" + ">" + number + "</span>"); }
        $(`.div${cell}`).html(highlight);
        cells = cells.slice(location + 3);
      } while (cells.length > 1);
      // Highlights the candidates to be removed
      break;
  } // Highlights the clicked line items
}





// Slide Menus
function buildDown() {
  $(`.buildSec`).slideToggle(500);
  $(`.bruteSec`).slideUp(500);
  $(`.toolsSec`).slideUp(500);
}
function buildUp() {
  $(`.buildSec`).slideUp(500);
}
function bruteDown() {
  $(`.buildSec`).slideUp(500);
  $(`.bruteSec`).slideToggle(500);
  $(`.toolsSec`).slideUp(500);
}
function bruteUp() {
  $(`.bruteSec`).slideUp(500);
}
function toolsDown() {
  $(`.buildSec`).slideUp(500);
  $(`.bruteSec`).slideUp(500);
  $(`.toolsSec`).slideToggle(500);
}
function toolsUp() {
  $(`.toolsSec`).slideUp(500);
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
  OutText.push(`Copy and paste Game Code into the top left cell and hit Input to reload the board.`);
  Instructions.push('skip');
  OutText.push(`\nGame Code:`);
  Instructions.push('skip');
  OutText.push(`\n`);
  Instructions.push('skip');
  OutText.push(`\n${boardString}`);
  Instructions.push('boardString#');
  OutText.push(`\n`);
  Instructions.push('skip');
  OutText.push(`\nSolution:`);
  Instructions.push('skip');
}
function inputBoard() {
  // If importing a game string then break up the string and assign it to the Board array
  // If not then just assign to the Board array
  if ($('.txt11').val().length == 81) {
    Guess = false;
    Complete = false;
    Candidates = false;
    Board.length = 0;
    CanBoard.length = 0;
    ClearedCount = 0;
    Cells.reverse().forEach(function(x) {
      Board[x] = $('.txt11').val()[80 - Cells.indexOf(x)];
    });
    Cells.reverse();
    notCandidateMode();
  } else {
    Cells.forEach(function(x) {
      Board[x] = $(`.txt${x}`).val();
    });
  }
  outputBoard();
  $(`.div`).html('');
  Cells.forEach(function(x) {
    Relations[x][20] = "";
    if (Board[x].length > 0) {
      $(`.txt${x}`).addClass('originalBoard');
      $(`.txt${x}`).attr('readonly','true');
    } else {
      if ($(`.txt${x}`).val().length > 1) { $(`.txt${x}`).val(''); }
      $(`.txt${x}`).removeClass('originalBoard');
      $(`.txt${x}`).removeClass('candidateCell');
      $(`.txt${x}`).removeClass('highlightCell');
      $(`.txt${x}`).removeClass('otherCell');
      $(`.txt${x}`).removeClass('noTouchy');
      $(`.txt${x}`).removeAttr('readonly','true');
    }
  });
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
  // Clears Board and resets variables
  if (Board.length == 0) {
    let span = document.getElementById("outputText");
    span.innerHTML = "";
    OutText.length = 0;
    Instructions.length = 0;
  } // If board already cleared then clear solution area

  Guess = false;
  Complete = false;
  Candidates = false;
  Board.length = 0;
  CanBoard.length = 0;
  ClearedCount = 0;
  $(`.txt`).val('');
  $(`.div`).html('');
  notCandidateMode();
  $(`.txt`).removeClass('originalBoard');
  $(`.txt`).removeAttr('readonly','true');
  $(`.txt`).removeClass('highlightCell');
  $(`.txt`).removeClass('noTouchy');
}

// Output Tools
function outputText(fontSize) {
  let finalText = "";
  for (let x = 0; x < OutText.length; x++) {
    finalText += OutText[x];
  }
  let span = document.getElementById("outputText");
  span.style.fontSize = fontSize + "px";
  if (finalText == "") { finalText = "Solution Area"; }
  span.innerHTML = finalText;
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
  Instructions.push('display');
  OutText.push(`\n${borderGrid}`);
  Instructions.push('display');

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
    Instructions.push('display');
    if (b % 3 == 0) {
        OutText.push(`\n${borderGrid}`);
        Instructions.push('display');
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
          OutText.push("\nUnsolvable puzzle from Trial and Error.");
          Instructions.push('guess error');
          OutText.push("\nReverting to the board before the guess.");
          Instructions.push('guess error');
        } else {
          OutText.push("\nError in entered puzzle.  Check Cells " + cellNumber + " and " + Relations[cellNumber][x] + ".");
          Instructions.push('puzzle error');
          OutText.push("\nUnsolvable puzzle.");
          Instructions.push('puzzle error');
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
        Instructions.push('remove related#');
    } else if (ClearedCount != 82) {
        OutText.push("\nCell " + cellNumber + " is " + Board[cellNumber] + ", so remove " + Board[cellNumber] + " as a possibility from all related Rows, Columns, and Boxes.");
        Instructions.push('remove related#');
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
          Instructions.push('must be#' + trials[z] + '#' + trials[Math.abs(z - 1)]);
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
      returns[5] = 0;
      for (let y = 1; y <= setSize; y++) {
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
    Instructions.push('subset#' + rcbNum + '#' + subNums);
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
      let firstReturn = "";
      let secondReturn = "";
      for (let y = 1; y <= chainSize; y++) {
        rcTag += sCombo[y] + "|";
        firstReturn += (rowsOrColumns == 0 ? -1 : 8) + sCombo[y] + "|" ;
        switchTag += switchRC[y] + (rowsOrColumns == 1 ? + 1 : - 8) + "|";
        secondReturn +=  switchRC[y] + "|" ;
      }
      rcTag = addCommasAndAnd(rcTag);
      switchTag = addCommasAndAnd(switchTag);
      OutText.push("\nIn " + (rowsOrColumns == 0 ? "Rows " : "Columns ") + rcTag + ", the Number " + number + " forms a Chain in " + (rowsOrColumns == 1 ? "Rows " : "Columns ") + switchTag + ", so remove " + number + " as a possibility from Cell" + addCommasAndAnd(resultCells) + ".");
      Instructions.push(`chain#${firstReturn}#${secondReturn}`);
      results = true;
    } // Prints the removed Numbers
  }
  return results;
}

// Solve Method Schemes
function solveBoard() {
  // Solves the puzzle, if solvable, and details the steps taken
  notCandidateMode();
  let solveTime;
  if (ClearedCount == 0) {
    solveTime = new Date().getTime();
    OutText.length = 0;
    Instructions.length = 0;
    Guess = false;
    Complete = false;
    groupsDecs();
    inputBoard();
    createBoardString();
    assignDefaultValues();
    clearAllRelations();
    sysOutPrintBoard();
  } // First time board setup

  if (ClearedCount == 0) { brute(false); return;}
  // If nothing on board then brute solve for fun

  let test = [];
  do {
    test = [];
    if (ClearedCount < 81) { test[0] = clearAllRelations(); }
    if (ClearedCount < 81) { test[1] = onlyInGroup(); }
    if (ClearedCount < 81) { test[2] = rcbInteraction(); }
    if (ClearedCount < 81) { test[3] = singleGroupMultipleNumbersSubset(); }
    if (ClearedCount < 81) { test[4] = multipleGroupsSingleNumberChain(); }
  } while (test[0] || test[1] || test[2] || test[3] || test[4]);
  // Main Logic based solve methods



  // if (!Guess && ClearedCount < 81 && ClearedCount > 0) {
  //   OutText.push("\nThe main logical methods have been exhausted.");
  // Instructions.push('logic exhausted');
  //   guess();
  // } // Trial And Error solve method
  // And add brute after if guess doesn't cut it
  // Turn this on before finish /\





  

  if (ClearedCount == 81 && !Complete) {
    sysOutPrintBoard();
    outputBoard();
    Complete = true;
    ClearedCount = 0;
    let totalTime = new Date().getTime() - solveTime;
    let time = totalTime / 1000;
    OutText.push("\nPuzzle solved in " + time + " seconds.");
    Instructions.push('skip');
    outputText($('.slider').val());
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
        Instructions.push('only group#' + rcbNum);
        // Prints the removed Numbers

        returns = true;
        clearAllRelations();
        if (ClearedCount == 82) { return false; }
        // Checks if the removed Numbers allowed the puzzle to be solved by an easier method
      } // If the Number can only be in one Cell and the Cell is not solved already then assign it
    }
  }
  return returns;
}
function rcbInteraction() {
  // If there are 2/3 Cells, in a Row/Column within the same Box, that a Number must be in because of the
  // Row/Column or the Box then remove that Number as a possibility from either the Box or Row/Column
  let returns = false;
  for (let number = 1; number <= 9; number++) {
    for (let boxNum = 18; boxNum <= 26; boxNum++) {
      let boxCells = findNumberInRCB(number, boxNum);
      // Find all the Cells within the Box that contain the Number

      let rcNum = findSubgroupOverlap(boxCells, boxNum);
      // Find all the instances in the Box of at least 2 Cells
      // in the same Row/Column that contain the Number

      let changes = evaluateSubgroupOverlap(rcNum, number, boxNum, boxCells);
      // If the subgroup of Cells must contain the Number then remove the Number
      // from the possibilities of either the rest of the Row/Column or the Box

      if (changes) { returns = true; }
    }
  }
  return returns;
}
function singleGroupMultipleNumbersSubset() {
  // If, in a Row/Column/Box, a group of possible Numbers form a subset then
  // remove the possible Numbers in those Cells that aren't in the subset
  let returns = false;
  let cells = [];
  for (let rcbNum = 0; rcbNum <= 26; rcbNum++) {
    for (let number = 0; number <= 9; number++) {
      cells[number] = findNumberInRCB(number, rcbNum);
    } // Find all the Cells within the Row/Column/Box that contain each Number

    let subset = findSubset(cells);
    // Finds a subset in the Row/Column/Box if there is one

    let changes = false;
    if (subset[0] != 0) { changes = evaluateSubset(subset, cells, rcbNum); }
    // If the Cells in the subset contain Numbers not in the subset then remove those Numbers
    if (changes) { returns = true; }
  }
  return returns;
}
function multipleGroupsSingleNumberChain() {
  // Also known as X-Wing / Swordfish
  // If, in multiple Rows/Columns, a Number is found the same number of times as Columns/Rows that it is in,
  // then those Cells can be said to form a chain.  If the Number can be found in the Columns/Rows of the chain
  // but in Cells not in the chain, then remove the Number as a possibility from those Cells.
  let returns = false;
  for (let rowsOrColumns = 0; rowsOrColumns <= 1; rowsOrColumns++) {
    for (let number = 1; number <= 9; number++) {
      for (let comboNumber = 0; comboNumber <= 245; comboNumber++) {

        let sCombo = searchCombinations(comboNumber);
        // Picks the Rows or Columns to compare

        let changes = findAndEvaluateChain(sCombo, rowsOrColumns, number);
        // Compares the Rows or Columns and if there is a chain then clear the chain

        if (changes) { returns = true; }
      }
    }
  }
  return returns;
}
function guess() {
  if (!Guess) {
    OutText.push("\n");
    Instructions.push('skip');
    OutText.push("\n");
    Instructions.push('skip');
    OutText.push("\nBegin Trial and Error.");
    Instructions.push('skip');
    OutText.push("\n");
    Instructions.push('skip');
    OutText.push("\n");
    Instructions.push('skip');
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
      Instructions.push('skip');
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
        Instructions.push('skip');
        Board[x] = Board[x].slice(1, 2);
        solveBoard();

        if (ClearedCount == 82) {
          OutText.push("\nAny entry for Cell " + x + " results in an unsolvable puzzle.  Check if the puzzle was entered correctly.")
          Instructions.push('skip');
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
      Instructions.push('skip');
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
        Instructions.push('skip');
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
          Instructions.push('skip');
          Board[x] = Board[x].slice(2, 3);
          solveBoard();

          if (ClearedCount == 82) {
            OutText.push("\nAny entry for Cell " + x + " results in an unsolvable puzzle.  Check if the puzzle was entered correctly.")
            Instructions.push('skip');
          }
        }
      }
    }
  } // If the puzzle can be solved by guessing at Cells with 3 options then solve it
}
function brute(show) {
  // Hard Brute ..............3.85..1.2.......5.7.....4...1...9.......5......73..2.1........4...9
  notCandidateMode();
  let solveTime = new Date().getTime();
  OutText.length = 0;
  Instructions.length = 0;
  OutText.push("Begin Brute Force");
  Instructions.push('skip');
  inputBoard();

  let neighbors = new Array(100);
  for (let a = 11; a <= 99; a++) {
    if (a % 10 == 0) { a++; }
    neighbors[a] = new Array(20);
    let counter = -1;
    for (let b = 11; b <= 99; b++) {
      if (b % 10 == 0) { b++; }
      if (a != b) {// If same row\/   or column\/           \/or in the same box
        if ((a / 10 | 0) == (b / 10 | 0) || a % 10 == b % 10 || ((((a / 10 | 0) - 1 ) / 3 | 0)  == (((b / 10 | 0) - 1 ) / 3 | 0) && ((a % 10 - 1 ) / 3 | 0) == ((b % 10 - 1 ) / 3 | 0))) {
          counter++;
          neighbors[a][counter] = b;
        }
      }
    }
  } // Define relations manually because math is fun

  if (show) {
    for (let cell = 11; cell <= 99; cell++) {
      if (cell % 10 == 0) { cell++; }

      if (Board[cell] == "") {
        let current = 1;
        let test;
        do {
          if (current < 10) {
            Board[cell] = "" + current;
            OutText.push("\nTrying Cell " + cell + " as " + current);
            Instructions.push('skip');
            test = true;
            for (let neighbor = 0; neighbor <= 19; neighbor++) { ///
              if (Board[neighbors[cell][neighbor]] != null && Board[neighbors[cell][neighbor]] != "" && Board[neighbors[cell][neighbor]] == Board[cell]) {
                test = false;
                OutText.push("\nCell " + cell + " cannot be " + current + " because Cell " + neighbors[cell][neighbor] + " is " + Board[neighbors[cell][neighbor]]);
                Instructions.push('skip');
                neighbor = 19;
              }
            }
          } else { test = false; }
          if (!test) {
            current++;
            if (current > 9) {
              OutText.push("\nCell " + cell + " cannot be any number");
              Instructions.push('skip');
              OutText.push("\nClearing Cell " + cell + " and moving back to Cell " + (cell - 1));
              Instructions.push('skip');
              Board[cell] = "";
              cell--;
              if (cell % 10 == 0) { cell--; }
              if (Board[cell] != null && Board[cell] != "") {
                current = parseInt(Board[cell]);
              } else { current = 0; }
              current++;
            }
          }
        } while (!test);
      }
    }
  } else {
    for (let cell = 11; cell <= 99; cell++) {
      if (cell % 10 == 0) { cell++; }

      if (Board[cell] == "") {
        let current = 1;
        let test;
        do {
          if (current < 10) {
            Board[cell] = "" + current;
            test = true;
            for (let neighbor = 0; neighbor <= 19; neighbor++) { ///
              if (Board[neighbors[cell][neighbor]] != null && Board[neighbors[cell][neighbor]] != "" && Board[neighbors[cell][neighbor]] == Board[cell]) {
                test = false;
                neighbor = 19;
              }
            }
          } else { test = false; }
          if (!test) {
            current++;
            if (current > 9) {
              Board[cell] = "";
              cell--;
              if (cell % 10 == 0) { cell--; }
              if (Board[cell] != null && Board[cell] != "") {
                current = parseInt(Board[cell]);
              } else { current = 0; }
              current++;
            }
          }
        } while (!test);
      }
    }
  }

  outputBoard();
  let totalTime = new Date().getTime() - solveTime;
  let time = totalTime / 1000;
  OutText.push("\nA solution has been found.  Brute Forced in " + time + " seconds.");
  Instructions.push('skip');
  OutText.push("\nThis does not guarentee the puzzle has only one solution.  This is just the first solution found.");
  Instructions.push('skip');
  outputText($('.slider').val());
  // Print time to solve by brute force
}

// New Puzzle Creation
function newPuzzle() {
  // 4 - Rotate
  // 6 - Col 123
  // 6 - Col 456
  // 6 - Col 789
  // 6 - Col Blocks
  // 6 - Row 123
  // 6 - Row 456
  // 6 - Row 789
  // 6 - Row Blocks
  // 5 - Symmetry
  // 9! - Numbers
  // 12,189,981,081,600 different variations Per Puzzle

  notCandidateMode();
  let difficulty = $("[name='diff']:checked").val();
  let newBoard;
  let random;


  if (difficulty == 4) { newBoard = Puzzles[4][0]; } else { return; }
  




  let wasBoard = [];
  Cells.forEach(function(x) {
    Board[x] = newBoard.slice(0, 1);
    wasBoard[x] = Board[x];
    newBoard = newBoard.slice(1);
  }); // Breaks down 81-char string into Board for usage and wasBoard for storage

  random = randomIntFromInterval(0, 3);
  if (random > 0) {
    for (let x = 1; x <= random; x++) {
      Cells.forEach(function(y) {
        Board[y] = wasBoard[(y % 10 * 10 + (10 - (y / 10 | 0)))];
      });
      Cells.forEach(function(y) {
        wasBoard[y] = Board[y];
      });
    }
  } // Rotates the board

  for (let x = 0; x <= 2; x++) {
    random = randomIntFromInterval(0, 5);
    if (random > 0) {
      let columns = [ [],[],[],[],[],[] ];
      for (let y = 0; y <= 26; y++) {
        columns[y / 9 | 0].push(Board[Groups[9 + (y / 9 | 0) + 3 * x][y % 9]]);
      } // Divide group of 3 Columns into an array each
      
      let newOrder = [ [0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0] ];
      columns[3] = columns[newOrder[random][0]].slice();
      columns[4] = columns[newOrder[random][1]].slice();
      columns[5] = columns[newOrder[random][2]].slice();
      // Shuffle the order

      for (let y = 0; y <= 26; y++) {
        Board[Groups[9 + (y / 9 | 0) + 3 * x][y % 9]] = columns[(y / 9 | 0) + 3][y % 9];
      } // Puts the new order back on the board
    }
  } // Switches Columns around

  for (let x = 0; x <= 2; x++) {
    random = randomIntFromInterval(0, 5);
    if (random > 0) {
      let rows = [ [],[],[],[],[],[] ];
      for (let y = 0; y <= 26; y++) {
        rows[y / 9 | 0].push(Board[Groups[(y / 9 | 0) + 3 * x][y % 9]]);
      } // Divide group of 3 Rows into an array each
      
      let newOrder = [ [0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0] ];
      rows[3] = rows[newOrder[random][0]].slice();
      rows[4] = rows[newOrder[random][1]].slice();
      rows[5] = rows[newOrder[random][2]].slice();
      // Shuffle the order

      for (let y = 0; y <= 26; y++) {
        Board[Groups[(y / 9 | 0) + 3 * x][y % 9]] = rows[(y / 9 | 0) + 3][y % 9];
      } // Puts the new order back on the board
    }
  }// Switches Rows around

  random = randomIntFromInterval(0, 5);
  if (random > 0) {
    let columnBox = [ [],[],[],[],[],[] ];
    Cells.forEach(function(x) {
      columnBox[((x % 10) - 1) / 3 | 0].push(Board[x]);
    }); // Pull 3 sets of 3 columns into an array each

    let newOrder = [ [0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0] ];
    columnBox[3] = columnBox[newOrder[random][0]].slice();
    columnBox[4] = columnBox[newOrder[random][1]].slice();
    columnBox[5] = columnBox[newOrder[random][2]].slice();
    // Shuffles the order

    Cells.forEach(function(x) {
      Board[x] = columnBox[(((x % 10) - 1) / 3 | 0) + 3][((x % 10 - 1) % 3 + (3 * ((x / 10 | 0) - 1)))];
    }); // Puts the new order back on the board
  } // Switches Column Boxes around

  random = randomIntFromInterval(0, 5);
  if (random > 0) {
    let rowBox = [ [],[],[],[],[],[] ];
    Cells.forEach(function(x) {
      rowBox[(x - 10) / 30 | 0].push(Board[x]);
    }); // Pull 3 sets of 3 rows into an array each

    let newOrder = [ [0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0] ];
    rowBox[3] = rowBox[newOrder[random][0]].slice();
    rowBox[4] = rowBox[newOrder[random][1]].slice();
    rowBox[5] = rowBox[newOrder[random][2]].slice();
    // Shuffles the order

    Cells.forEach(function(x) {
      Board[x] = rowBox[((x - 10) / 30 | 0) + 3][(x - ((x - 10) / 10 | 0) - 11) % 27];
    }); // Puts the new order back on the board
  }// Switches Row Boxes around

  random = randomIntFromInterval(0, 4);
  Cells.forEach(function(x) {
    wasBoard[x] = Board[x];
  });
  switch (random) {
    case 0: // Symmetry line from the left center to the right center
      Cells.forEach(function(x) {
        Board[x] = wasBoard[x];
        if (x < 50) { Board[x] = wasBoard[x + 10 * (10 - 2 * (x / 10 | 0))]; }
        if (x > 60) { Board[x] = wasBoard[x - 10 * (2 * (x / 10 | 0) - 10)]; }
      });
      break;
    case 1: // Symmetry line from the top left to the bottom right
      Cells.forEach(function(x) {
        Board[x] = wasBoard[10 * (x % 10) + (x / 10 | 0)];
      });
      break;
    case 2: // Symmetry line from the top center to the bottom center
      Cells.forEach(function(x) {
        Board[x] = wasBoard[x];
        if (x % 10 < 5) { Board[x] = wasBoard[x + 2 * (5 - x % 10)]; }
        if (x % 10 > 5) { Board[x] = wasBoard[x - 2 * (x % 10 - 5)]; }
      });
      break;
    case 3: // Symmetry line from the top right to the bottom left
      Cells.forEach(function(x) {
        Board[x] = wasBoard[x];
        Board[x] = wasBoard[10 * (10 - x % 10) + 10 - (x / 10 | 0)];
      });
      break;
    case 4: break;
  } // Flips the board across an axis

  Cells.forEach(function(x) {
    newBoard += Board[x];
  }); // Moves Board back to 81-char string

  let letters = "abcdefghi";
  for (let x = 0; x <= 8; x++) {
    random = randomIntFromInterval(0, 8 - x);
    let letter = letters.slice(random, random + 1);
    do {
      newBoard = newBoard.replace(letter, x + 1);
    } while (newBoard.includes(letter))
    letters = letters.replace(letter, "");
  } // Assigns the numbers

  $(`.txt11`).val(newBoard);
  inputBoard();
  // Shows the final board
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Initial Setup
function initialSetup() {
  groupsDecs();
  boardSetup();
  handleEvents();
  

}
$(initialSetup);
