/*let a = [4, 8, 7, 13, 12]
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum)*/

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum / scores.length;
  
  }
  
  //console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  //console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if ( score >= 90 && score <= 99) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 60 && score <= 69) {
      return "D";
    } else if (score >= 0 && score <= 59) {
      return "F";
    }
  }
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));