import Swal from "sweetalert2"

const Character = ({ character }) => {

  const { image, name, species, origin, location, gender, status } = character

  const showMore = () => {
    Swal.fire({
      title: name,
      html: `
        <b>Origin:</b> ${origin.name} <br>
        <b>Location:</b> ${location.name} <br>
        <b>Gender:</b> ${gender} <br>
        <b>Status:</b> ${status}
      `,
      imageUrl: image,
      imageWidth: 200,
      imageHeight: 200,
      background: '#fff',
      backdrop: "rgba(0, 0, 0, 0.9)",
      imageAlt: `image of ${name}`,
    })
  }

  return (
    <div className="col-md-3 mb-2 mt-2">
      <div className="card">
        <img src={image} className="card-img-top" alt={`imagen of ${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{species}</p>
          <button className="btn btn-primary" onClick={() => showMore()}>Show more</button>
        </div>
      </div>     
    </div>
  )
}

export default Character
