interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps){
  return(
    <button> 
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Send"/>
    </div>
  )
}

export default App
