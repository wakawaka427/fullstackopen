import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <ul>
            <Part part = {props.parts[0].part} exercises = {props.parts[0].exercises} />
            <Part part = {props.parts[1].part} exercises = {props.parts[1].exercises} />
            <Part part = {props.parts[2].part} exercises = {props.parts[2].exercises} />
        </ul>
    )
}

const Part = (props) => {
    return (
        <li>{props.part} {props.exercises}</li>
    )
}

const Footer = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises
             + props.parts[1].exercises 
             + props.parts[2].exercises}</p> 
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
        part: 'Fundamentals of React',
        exercises: 10 
    },
    {
        part: 'Using props to pass data',
        exercises: 7 
    },
    {
        part: 'State of a component',
        exercises: 14 
    },
  ]

  return (
    <div>
        <Header course = {course} />
        <Content parts = {parts} />
        <Footer parts = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))