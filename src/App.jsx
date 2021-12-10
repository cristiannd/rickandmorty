import { useState } from "react"
import Form from "./components/Form"
import ShowData from "./components/ShowData"

const App = () => {

  const [nameCharacter, setNameCharacter] = useState()

  return (
    <div className="container">
      <h1>App Rick and Morty</h1>
      <Form setNameCharacter={setNameCharacter} />
      <ShowData nameCharacter={nameCharacter} />
    </div>
  )
}

export default App 