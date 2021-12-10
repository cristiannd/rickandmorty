import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import Character from "./Character"
import Loading from "./Loading"

const ShowData = ({ nameCharacter }) => {

  const [dataCharacter, setDataCharacter] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    responseDataApi(nameCharacter)
  }, [nameCharacter])

  const responseDataApi = async(name = "") => {
    setLoading(true)

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)

      if(!res.ok) {
        return Swal.fire({
          icon: 'error',
          title: 'Character not found',
          html: `The character <b>${name}</b> was not found`,
        })
      }

      const data = await res.json()
      setDataCharacter(data.results)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };

  if(loading) {
    return <Loading />
  }

  return (
    <div className="row">
      {
        dataCharacter.map(e => (
          <Character key={e.id} character={e} />
        ))
      }
    </div>
  )
}

export default ShowData
