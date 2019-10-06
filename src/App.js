import React from 'react';
import Quiz from './Quiz';
import quizQuestions from './quizQuestionsAPI';

const Questions = () => (quizQuestions[0].question)
const Answers = () => (quizQuestions[0].answers[0].content)

export default class App extends React.Component{
  render(){
    return ( 
    <div>
      <Questions/>
      <Answers/>
      <Quiz/>
    </div>
    )
  }
}
//////////////////////////////////////////////////
let targetValue = (x, y, z, a, b, c) => { 
  let minimum = Math.min (x, y, z, a, b, c);
 return minimum;
}
console.log(targetValue(20, 5, 1, 4, 0.5, 777));
//////////////////////////////////////////////////
let isEven = (number) => {
  if(number % 2 === 0) return true;
  else return false;
}
console.log(isEven(101) ? "it's actually true" : "it's false, brow");
/////////////////////////////////////////////////////////////////////////
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
