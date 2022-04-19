

const Header = (props) => {
    
  return (
      <>
      <h1>{props.course}</h1>
      </>
  )

}

const Part = (props) =>{

  return (
    <>
      <p>{props.part} {props.exercise}</p>
    
    </>
  )
}

const Content = (props) => {
  
  return (
      <>
      <Part part={props.part[0].name} exercise={props.part[0].exercises} />
      <Part part={props.part[1].name} exercise={props.part[1].exercises} />
      <Part part={props.part[2].name} exercise={props.part[2].exercises} />
      </>
  )
}

const Total = (props) => {
  
  return (
      <>
      <p> Number of exercise = {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
      </>
  )
  }


function App() {

  const course ={
    
  name: 'Half Stack application development',
   
   parts : [
  { 
     name : 'Fundamentals of React',
     exercises : 10
 },
 { 
  name : 'Using props to pass data',
  exercises : 7
},
{ 
  name : 'State of a Component',
  exercises : 14
}]
  }


  
  return (
    <div className="App">
     <Header course={course.name} />
     <Content part={course.parts}  />
     <Total total={course.parts}  />
    </div>
  );
}

export default App;
