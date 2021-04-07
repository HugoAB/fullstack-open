import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({onClick, name}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}


const Statistic = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.name}</td><td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({ good, bad, neutral }) => {

  if((good + bad + neutral) === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <Statistic name={'good'} value={good} />
      <Statistic name={'neutral'} value={neutral} />
      <Statistic name={'bad'} value={bad} />
      <Statistic name={'all'} value={good + bad + neutral} />
      <Statistic name={'average'} value={(good - bad) / (good + bad + neutral)} /> 
      <Statistic name={'positives'} value={(100 * good) / (good + bad + neutral)} />
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  }


  const handleBad = () => {
    setBad(bad +1);
  }


  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} name={'good'}/>
      <Button onClick={handleNeutral} name={'neutral'} />
      <Button onClick={handleBad} name={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);