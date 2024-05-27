export default function Card() {
    return (
        <div className="card">
            <div className="image-status">
            <img className="card-pic" src="card-img.png"/>
            <p className="status">SOLD OUT</p>
            </div>
            
            <div className="card--first-line">
                <img src="star.png" />
                <p>5.0</p>
                <span className="first-line--second-part">
                    <p>(6)</p>
                    <p>USA</p>
                </span>
            </div>
            <p>Life lessons with Katie Zafares</p>
            <p><strong>From $136</strong> / person</p>

        </div>
    )
}