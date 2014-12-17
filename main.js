function scores() {
  var grade = 0 ;
  grade += filling() ;
  grade += choice() ;
  grade += multipleChoice() ;
  grade += judge() ;
  grade += question() ;
  document.getElementById('count').value = grade;

}

function filling() {
  var grade = 0 ;
  var answer1_1 = document.getElementById('UML');
  var answer2_1 = document.getElementById('one');
  var answer2_2 = document.getElementById('two');
  var answer2_3 = document.getElementById('three');
  if (answer1_1.value === '统一建模语言') {
    grade += 10 ;
  }
  if (answer2_1.value === '封装性') {
    grade += 5 ;
  }
  if (answer2_2.value === '继承性') {
    grade += 5 ;
  }
  if (answer2_3.value === '多态性') {
    grade += 5 ;
  }
  return grade ;
}
function choice() {
  var grade = 0 ;
  var select1 = document.getElementsByName('select1');
  for (var i = 0;i < select1.length; i++) {
    if (select1[i].checked && select1[i].value === "B") {
      grade += 10 ;
    }
  }

  var select2 = document.getElementsByName('select2');
  for (var j = 0 ;j < select2.length; j++) {
    if (select2[j].checked && select2[j].value === "A") {
      grade += 10 ;
    }
  }
  return grade ;
}

function multipleChoice() {
  var grade = 0 ;
  var array1 = [];
  var array2 = [];
  var select1 = document.getElementsByName('moreSelect1');
  var select2 = document.getElementsByName('moreSelect2');
  for (var i = 0; i < select1.length; i++) {
    if (select1[i].checked === true) {
      array1.push(select1[i].value);
    }
  }

  if (array1.toString() === "A,B,D") {
      grade += 10 ;
  }

  for (var j = 0; j < select2.length; j++) {
    if (select2[j].checked === true) {
      array2.push(select2[j].value);
    }
  }
  if (array2.toString() === "A,B,C") {
    grade += 10 ;
  }

 return grade;
}

function judge() {
  var grade = 0;
  var judge1 = document.getElementsByName("judge1");
  var judge2 = document.getElementsByName("judge2");
  for (var i = 0; i < judge1.length;i++) {
    if (judge1[i].checked && judge1[i].value === 'N') {
      grade += 10;
    }
  }
  for (var j = 0;j < judge2.length; j++) {
    if (judge2[j].checked && judge2[j].value === 'Y') {
      grade += 10;
    }
  }
  return grade;
}

function question() {
  var grade = 0;
  var string = "模型是对现实世界的简化和抽象，模型是对所研究的系统过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形或者是一种数学表达式。";
  var questions = document.getElementById('questions');

  if (questions.value === string) {
    grade += 10;
  }
  return grade;
}
