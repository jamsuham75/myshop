import { useNavigate } from "react-router-dom";

function Card(props){
  let navigate = useNavigate();
    return(
      <div className="col-md-4" onClick={()=>{navigate('/detail/' + props.i)}}>
        {/* <img src = {shoes1} width="80%"></img> */}
        <img src = {process.env.PUBLIC_URL + "/shoes" + (props.i + 1) + ".jpg"} width="80%"></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    )
  }

  export default Card;