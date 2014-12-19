function printScore() {
    var score = 0;
    var questions = Question.all();

    _.forEach(questions, function(question) {
      var anwser = document.getElementsByName(question.topicName);
      score += question.countScore(anwser);
    });

    document.getElementById('count').value = score;

    return false;
  }

//   var questionScore = getQuestionScore('5_1','模型是对现实世界的简化和抽象，模型是对所研究的系统过程、' +
//     '事物或概念的一种表达形式。可以是物理实体；可以是某种图形或者是一种数学表达式。');
//
//   score =  fillScore + choiceScore + multipleChoiceScore +
//     judgeScore + questionScore;
//   document.getElementById('count').value = score;
// }
//


//
// function getJudgeScore(name,answer) {
//   var score = 0;
//   var judge = document.getElementsByName(name);
//   for (var i = 0;i < judge.length;i++) {
//     if (judge[i].checked  === true && judge[i].value ===  answer) {
//       score += 10;
//     }
//   }
//   return score;
// }
//
// function getQuestionScore(id,answer) {
//   var questions = document.getElementById(id);
//   return questions.value === answer ? 10 :0;
// }
//
// function judgeNull() {
//   var personName = document.getElementById("name").value;
//   var personId = document.getElementById("id").value;
//   var personClass = document.getElementById("class").value;
//
//   if (personName === "" || personId === "" || personClass ==="") {
//     alert("请输入个人信息！");
//   }
// }
