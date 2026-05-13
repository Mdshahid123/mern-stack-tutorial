function FounderCard(props) {

  return (

    <div className="card">

      <img
        src={props.image}
        alt="founder"
      />

      <h2>{props.name}</h2>

      <p>{props.role}</p>

    </div>

  )
}

export default FounderCard;