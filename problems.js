// easy
const subsqeuence = (array = [], sequence) => {
  let seqIDX = 0;
  for (const value of array) {
    if (seqIDX === sequence.length) break;
    if (sequence[seqIDX] === value) seqIDX++;
  }

  return seqIDX === sequence.length
}


// easy
function sortedSquaredArray(array = []) {
  const op = [];
  // Write your code here.
  array.forEach((ele, index) => {
    op.push(ele * ele);
  })
  return op.sort((a, b) => a - b);
}


// Longest Range -- hard
function largestRange(array = []) {
  const map = new Map();
  let maxLength = 0;
  let maxLengthArrays = [];
  let maxLengthRange = [];
  // add booleans into map
  array.forEach((val, index) => {
    map.set(val, false);
  });

  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];
    if (map.get(currentVal)) {
      continue;
    }
    let length = 1;
    const lengthArr = [currentVal];
    let minLeft = array[i];
    let maxRight = array[i];
    // traverse left
    while (true) {
      const valToFind = currentVal - 1;
      if (!map.has(valToFind) || map.get(valToFind)) {
        break;
      }
      minLeft = Math.min(minLeft, valToFind);
      length++;
      lengthArr.push(valToFind);
      map.set(valToFind, true);
      currentVal = valToFind;
    }

    currentVal = array[i];
    // traverse right
    while (true) {
      const valToFind = currentVal + 1;
      if (!map.has(valToFind) || map.get(valToFind)) {
        break;
      }
      maxRight = Math.max(maxRight, valToFind);
      length++;
      lengthArr.push(valToFind);
      map.set(valToFind, true);
      currentVal = valToFind;
    }


    map.set(currentVal, true);
    if (length >= maxLength) {
      maxLengthArrays = lengthArr;
      maxLength = length;
      // maxLengthRange = [Math.min(...lengthArr), Math.max(...lengthArr)];
      maxLengthRange = [minLeft, maxRight];
    }
  }
  return maxLengthRange
}

// console.log(largestRange([-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2]));


// Tournament Winner
// results - 1 = home team
// results -0 =  away team
// team wins = 3 points
// team loses = 0 points
function tournamentWinner(competitions = [], results = []) {
  const scores = {};
  let currentMaxScore = 0;
  let currentMaxTeam = '';
  competitions.forEach((competition, index) => {
    const winner = results[index];
    if (winner === 0) {
      // away team
      scores[competition[1]] ? scores[competition[1]]+=3 : scores[competition[1]] = 3;
      if (scores[competition[1]] > currentMaxScore) {
        currentMaxScore = scores[competition[1]];
        currentMaxTeam = competition[1];
      }
    } else {
      // home team
      scores[competition[0]] ? scores[competition[0]]+=3 : scores[competition[0]] = 3;
      if (scores[competition[0]] > currentMaxScore) {
        currentMaxScore = scores[competition[0]];
        currentMaxTeam = competition[0];
      }
    }
  })

  // Write your code here.
  return currentMaxTeam;
}

console.log(tournamentWinner([
  ['HTML', 'Python#'],
  ['HTML', 'Python'],
  ['Python', 'Python']
],[1,0,0]))