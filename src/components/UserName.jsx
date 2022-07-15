
import '../styles/card.scss'

function UserName(props){
    return(
        <div className="card">
        <img className="image" src={props.email}/>
        <h2 className="Name">{props.name}</h2>
        </div>
    )
}


export default UserName