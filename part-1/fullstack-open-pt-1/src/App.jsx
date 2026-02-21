const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} old.</p>
    </div>
  )
}

const App = () => {
  const name = 'Nateyana'
  const age = 33

  return (
    <div>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App
