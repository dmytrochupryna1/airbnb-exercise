export default function Card(props) {
    return (
        <div className="card">
            <div className="image-status">
            <img className="card-pic" src={props.item.img}/>
            <p className="status">{props.item.status}</p>
            </div>
            
            <div className="card--first-line">
                <img src="star.png" />
                <p>{props.item.rating}</p>
                <span className="first-line--second-part">
                    <p>({props.item.reviews})</p>
                    <p>{props.item.location}</p>
                </span>
            </div>
            <p>{props.item.title}</p>
        <p><strong>From ${props.item.price}</strong> / person</p>

        </div>
    )
}