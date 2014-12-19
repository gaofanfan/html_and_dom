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
