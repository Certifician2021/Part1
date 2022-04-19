import { useState } from 'react' 


const Button = (props) => {
  return(
     <button onClick={props.onClick}>{props.name}</button>
  )
}
const tableStyle = {
  "border": "1px solid black",
  "borderCollapse": "collapse"
};

const StatisticLine = (props) => {
  if(props.value){
  return(
      <td style={tableStyle}>{props.text} <br />{props.value}</td>
  )}

  }

  const Checker = (props) => {
      if(props.value === 0){
        return(
          <p>No feedback given...</p>
        )
      }


  }



function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  const[all, setAll] = useState(0)

  const handleGood = () => {
  setGood(good + 1)
  setAll(all + 1)

  }
  const handleBad = () => {
  setBad(bad + 1)
  setAll(all + 1)

    
  }
  const handleNeutral= () => {
   setNeutral(neutral + 1)
   setAll(all + 1)

    
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        onClick={handleGood} name='Good'
      ></Button>   
      <Button
        onClick={handleNeutral} name='Neutral'
      >  </Button> 
       <Button
        onClick={handleBad} name = 'Bad'
      >   </Button> 

    <h2>Statistics</h2>
    <Checker value={all}/>
    
    <table style={tableStyle}>
      <tr >
    <StatisticLine text = 'Good' value = {good}/>
    <StatisticLine text = 'Neutral' value = {neutral}/>
    <StatisticLine text = 'Bad' value = {bad}/>
    <StatisticLine text = 'All' value = {all}/>
    <StatisticLine text = 'Average' value = {(good - bad)/all}/>
    <StatisticLine text = 'Positive' value = {good/all}/>
    
    </tr>
    </table>
    </div>
  )
}

export default App;
