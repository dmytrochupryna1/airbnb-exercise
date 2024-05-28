import Card from './Card'
import cardData from '../cardData.js'

console.log(cardData)

export default function AllCards() {
    const renderCardData = cardData.map((card) => {
        return <Card
            img={card.img}
            status={card.status}
            rating={card.rating}
            reviews={card.reviews}
            location={card.location}
            title={card.title}
            price={card.price}
        />
    })
    return (
        <div className="all-cards">
            {renderCardData}
        </div>
        
    )
}