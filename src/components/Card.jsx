export default function Card(props) {
    return (
        <div className="card">
            <div className="image-status">
            <img className="card-pic" src={props.img}/>
            <p className="status">{props.status}</p>
            </div>
            
            <div className="card--first-line">
                <img src="star.png" />
                <p>{props.rating}</p>
                <span className="first-line--second-part">
                    <p>({props.reviews})</p>
                    <p>{props.location}</p>
                </span>
            </div>
            <p>{props.title}</p>
        <p><strong>From ${props.price}</strong> / person</p>

        </div>
    )
}