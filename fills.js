function Completion(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

Completion.prototype = Object.create(Question.prototype);
Completion.prototype.constructor = Completion;

Completion.prototype.countScorce = function (answer) {
  var scorce = 0;
  var answers = [];
  for (var i = 0; i < answer.length; i++) {
    answers.push(answer[i].value);
  }
  _this = this;
  _.forEach(this.rightAnswer, function(array) {
    if(_.contains(answers, array)) {
      scorce += _this.scorce;
    }
  });
  return scorce;
};
