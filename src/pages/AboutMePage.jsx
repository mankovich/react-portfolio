import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import '../index.css'

function AboutMePage() {

    return (
        <>
            <Container>
                <Row>
                    <h2 className="page-titles">About Me</h2>
                </Row>
                <Row>
                    <Col xs={4}>
                        <div id="photo-div">
                            <img src="https://placehold.co/300" alt="image of Joey Mankovich" />

                        </div>
                    </Col>
                    <Col xs={8}>
                        <div id="bio-div">
                            <p>
                                I'm baby ugh iPhone quinoa portland. Enamel pin swag ex, cred chia excepteur cardigan consectetur gorpcore echo park solarpunk occupy pork belly sriracha sint. Kitsch fixie asymmetrical, kickstarter DSA ad aliquip. Palo santo pok pok post-ironic, knausgaard gatekeep tempor fit iceland succulents man bun. Nostrud JOMO nulla, bespoke fanny pack bodega boys 3 wolf moon activated charcoal pork belly everyday carry PBR&B wolf readymade est locavore.

                            </p>
                            <p>
                                Aliquip sustainable irony, officia helvetica flannel retro vibecession activated charcoal pour-over enamel pin. Messenger bag bitters cred, bruh tumeric mollit marfa mixtape. Vice listicle ennui, plaid bitters twee gatekeep mustache cloud bread ascot in bodega boys kickstarter. Semiotics thundercats truffaut vinyl grailed leggings. Ethical trust fund put a bird on it mixtape taxidermy. Vexillologist letterpress big mood hoodie, veniam mukbang activated charcoal.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutMePage;