import Card from './Card'
export default function AllCards() {
    return (
        <div className='all-cards'>
            <Card
                img="card-img.png"
                status="SOLD OUT"
                rating="4.0"
                reviews="6"
                location="USA"
                title="Life lessons with Bob Marley"
                price="4.20"
            />
            <Card
                img="asya-1.png"
                status="MYSTERIOUS"
                rating="5.0"
                reviews="99"
                location="UKRAINE"
                title="Let's go on a date"
                price="1000"
            />
            <Card
                img="thai-1.png"
                status="IN THE JUNGLE"
                rating="4.0"
                reviews="6"
                location="Thailand"
                title="Explore Koh Phanga"
                price="136"
            />
            <Card
                img="yunka.png"
                status="SO HOT"
                rating="2.7"
                reviews="2"
                location="Ban Thai"
                title="Hot yoga with Yunka"
                price="14"
            />
        </div>
        
    )
}