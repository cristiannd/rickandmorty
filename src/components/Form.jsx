import { useForm } from "../hooks/useForm"
import Swal from "sweetalert2"


const Form = ({ setNameCharacter }) => {

  const [inputs, handleChange, reset] = useForm({
    name: ""
  })

  const { name } = inputs

  const handleSubmit = e => {
    e.preventDefault()

    if(!name.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Fill in the field to search',
      })
    }

    setNameCharacter(name.trim().toLowerCase())
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your character"
        className="form-control mb-2"
        value={name}
        onChange={handleChange}
        name="name"
      />
      <button type="submit" className="btn btn-dark">Find</button>
    </form>
  )
}

export default Form