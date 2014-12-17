function printScore() {
  var score = 0 ;

  var fillAnswer = ['封装性','继承性','多态性'];
  var fillId = ['2_1','2_2','2_3'];
  var fillScore = getFillScore1('1_1','统一建模语言') + getFillScore2(fillId,fillAnswer);
  var choiceScore = getChoiceScore('2_1_1','B') + getChoiceScore('2_2_1','A');
  var multipleChoiceScore = getMultipleChoiceScore('3_1','A,B,D') + getMultipleChoiceScore('3_2','A,B,C');
  var judgeScore = getJudgeScore('4_1','N') + getJudgeScore('4_2','Y');
  var questionScore = getQuestionScore('5_1','模型是对现实世界的简化和抽象，模型是对所研究的系统过程、' +
    '事物或概念的一种表达形式。可以是物理实体；可以是某种图形或者是一种数学表达式。');
    score =  fillScore + choiceScore + multipleChoiceScore +
    judgeScore + questionScore;
  document.getElementById('count').value = score;

}

function getFillScore1(id,answer) {
  var userAnwser = document.getElementById(id).value;
  return userAnwser === answer ? 10 : 0;
 }

function getFillScore2(id,answer) {
  var score = 0;
  for (var i = 0;i < id.length;i++) {
    for (var j = 0;j < answer.length; j++) {
    if(document.getElementById(id[i]).value === answer[j]) {
      score += 5 ;
    }
  }
 }
    return score;
}

function getChoiceScore(name,answer) {
  var score = 0;
  var radio = document.getElementsByName(name);
  for (var i = 0;i < radio.length;i++) {
  if( radio[i].checked === true && radio[i].value === answer ) {
    score = 5 ;
  }
 }
 return score;
}

function getMultipleChoiceScore(name,answer) {
  var score = 0;
  var array = [];
  var radio = document.getElementsByName(name);
  for(var i = 0;i < radio.length; i++) {
    if  (radio[i].checked === true) {
      array.push(radio[i].value);
    }
    if (array.toString() === answer) {
      score = 10;
    }
  }
  return score;
}
function getJudgeScore(name,answer) {
  var score = 0;
  var judge = document.getElementsByName(name);
  for (var i = 0;i < judge.length;i++) {
    if(judge[i].checked && judge[i].value === answer) {
      score = 10;
    }
  }
  return score;
}

function getQuestionScore(id,answer) {

  var questions = document.getElementById(id);
  return questions.value === answer ? 10 :0;
}
