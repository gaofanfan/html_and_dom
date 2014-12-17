function printScore() {
  var score = 0 ;
  score += filling() ;
  score += choice() ;
  score += multipleChoice() ;
  score += judge() ;
  score += question() ;
  document.getElementById('count').value = score;

}

function filling() {
  var score = 0 ;
  var answer1_1 = document.getElementById('1_1');
  var answer2_1 = document.getElementById('2_1');
  var answer2_2 = document.getElementById('2_2');
  var answer2_3 = document.getElementById('2_3');
  if (answer1_1.value === '统一建模语言') {
    score += 10 ;
  }
  if (answer2_1.value === '封装性') {
    score += 5 ;
  }
  if (answer2_2.value === '继承性') {
    score += 5 ;
  }
  if (answer2_3.value === '多态性') {
    score += 5 ;
  }
  return score ;
}
function choice() {
  var score = 0 ;
  var answer2_1_1 = document.getElementsByName('2_1_1');
  for (var i = 0;i < answer2_1_1.length; i++) {
    if (answer2_1_1[i].checked && answer2_1_1[i].value === "B") {
      score += 10 ;
    }
  }

  var answer2_1_2 = document.getElementsByName('2_2_1');
  for (var j = 0 ;j <  answer2_1_2 .length; j++) {
    if ( answer2_1_2[j].checked &&  answer2_1_2 [j].value === "A") {
      score += 10 ;
    }
  }
  return score ;
}

function multipleChoice() {
  var score = 0 ;
  var array1 = [];
  var array2 = [];
  var answer3_1 = document.getElementsByName('3_1');
  var answer3_2 = document.getElementsByName('3_2');
  for (var i = 0; i < answer3_1.length; i++) {
    if (answer3_1[i].checked === true) {
      array1.push(answer3_1[i].value);
    }
  }

  if (array1.toString() === "A,B,D") {
     score += 10 ;
  }

  for (var j = 0; j < answer3_2.length; j++) {
    if (answer3_2[j].checked === true) {
      array2.push(answer3_2[j].value);
    }
  }
  if (array2.toString() === "A,B,C") {
    score += 10 ;
  }

 return score;
}

function judge() {
  var score = 0;
  var judge1 = document.getElementsByName("4_1");
  var judge2 = document.getElementsByName("4_2");
  for (var i = 0; i < judge1.length;i++) {
    if (judge1[i].checked && judge1[i].value === 'N') {
      score += 10;
    }
  }
  for (var j = 0;j < judge2.length; j++) {
    if (judge2[j].checked && judge2[j].value === 'Y') {
      score += 10;
    }
  }
  return score;
}

function question() {
  var score = 0;
  var string = "模型是对现实世界的简化和抽象，模型是对所研究的系统过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形或者是一种数学表达式。";
  var questions = document.getElementById('5_1');

  if (questions.value === string) {
    score += 10;
  }
  return score;
}
