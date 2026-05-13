function MentorCard(props) {

  return (

    <div className="card">

      <img
        src={props.image}
        alt="mentor"
      />

      <h2>{props.name}</h2>

      <p>{props.skill}</p>

    </div>

  )
}

export default MentorCard;