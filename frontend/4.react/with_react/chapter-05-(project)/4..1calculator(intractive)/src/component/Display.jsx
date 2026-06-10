import "./Display.css"
function Display(props)
{

     return(
        <input className="display" type="text" value={props.output} />
     )

}


export default Display