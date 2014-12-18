function Question(name, rightAnswer, scorce){
  this.name = name;
  this.rightAnswer = rightAnswer;
  this.scorce = scorce;
}
Question.all = function(){
  return Answers.getrightAnswer();
};

Question.prototype.countScorce = function () {

};
