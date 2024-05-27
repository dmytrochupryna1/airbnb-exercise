export default function Card({img, status, rating, reviews, location, title, price}) {
    return (
        <div className="card">
            <div className="image-status">
            <img className="card-pic" src={img}/>
            <p className="status">{status}</p>
            </div>
            
            <div className="card--first-line">
                <img src="star.png" />
                <p>{rating}</p>
                <span className="first-line--second-part">
                    <p>({reviews})</p>
                    <p>{location}</p>
                </span>
            </div>
            <p>{title}</p>
        <p><strong>From ${price}</strong> / person</p>

        </div>
    )
}