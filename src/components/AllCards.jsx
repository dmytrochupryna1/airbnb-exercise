import Card from './Card'
import cardData from '../cardData.js'

console.log(cardData)

export default function AllCards() {
    const renderCardData = cardData.map((item) => {
        return <Card
            key={item.id}
            item={item}
        />
    })
    return (
        <div className="all-cards">
            {renderCardData}
        </div>
        
    )
}