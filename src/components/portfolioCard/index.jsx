import Card from 'react-bootstrap/Card'

function PortfolioCard({ name, image, alt, gitHubRepo, deployedURL }) {

    return (
        <>
            <Card id="portfolio-card">
                <Card.Header as="h4" style={{backgroundColor: 'teal', color: 'yellow'}}>{name}</Card.Header>
                <Card.Img variant="top" src={image} alt={alt} />
                <Card.Body style={{backgroundColor: 'yellow', fontWeight: '700'}}>
                    <Card.Link href={gitHubRepo}>GitHub Repo</Card.Link>
                    <Card.Link href={deployedURL}>Deployed App</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default PortfolioCard;