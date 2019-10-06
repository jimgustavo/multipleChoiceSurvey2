import React from 'react';
import dataSet from './dataSet';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0}
    this.handleClick = this.handleClick.bind(this)
    
  } // end constructor
  
  handleClick(choice) {
    if (choice === this.state.dataSet[this.state.current].correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
    
    if (this.state.current === 9) {
      this.setState({current: 0})
      this.setState({incorrect: 0})
      this.setState({correct: 0})
    } else {
         this.setState({current: this.state.current + 1}) 
    }
  }
  
  render() {
    return(
      <div>
        <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
        <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
      </div>
    )
  }
}

function Question(props) {
  var style = {
    color: "red",
  }
  return (
    <h1 style={style}>{props.dataSet.question}</h1>
  )
}

function Answer(props) {
  var style = {
    width: "100%",
    height: 50,
    color: "blue"
  }
  return(
    <div>
      <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}

function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  return(
    <div>
      {answers}
    </div>
  )
}

function QuizArea(props) {
  var style = {
    width: "25%",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    float: "left",
    padding: "0 2em"
  }
  return(
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  )
}

function TotalCorrect(props) {
    var style = {
    display: "inline-block",
    padding: "1em",
    background: "#eee",
    margin: "0 1em 0 0"
  }
  return(
    <h2 style={style}>Correct: {props.correct}</h2>
  )
}

function TotalIncorrect(props) {
  var style = {
    display: "inline-block",    
    padding: "1em",
    background: "#eee",
    margin: "0 0 0 1em"
  }
  return(
    <h2 style={style}>Incorrect: {props.incorrect}</h2>
  )
}

function ScoreArea(props) {
  var style = {
    width: "100%",
    display: "block",
    textAlign: "left",
    float: "left",
    padding: "2em"
  }
  return(
    <div style={style} >
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  )
}

