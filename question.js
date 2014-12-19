function Question(tipicName, standardAnswer, score){
  this.tipicName = tipicName;
  this.standardAnswer = standardAnswer;
  this.score = score;
}
Question.all = function(){
  return Answers.getstandardAnswer();
};

Question.prototype.countScore = function () {

};
