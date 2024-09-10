import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function ResumePage() {

    return (
        <>
        <Container>
            <Row>
                <Col>
         
                <h3 className="page-titles">Resume</h3>
         

                </Col>
                <Col>
                <h3 className="page-titles">Dev Proficiencies</h3>
                </Col>
            </Row>
            <Row>
                <Col>
            <div>
            <p style={{marginLeft: '15px'}}>A .pdf of my resume may be downloaded <a href="src/assets/resume.5.2024.pdf">here.</a></p>
            </div>
                </Col>
                <Col>
                <ul style={{marginLeft: '15px'}}>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>React-Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>Sequelize</li>
                    <li>Express</li>
                    <li>emailjs</li>
                </ul>
                </Col>
            </Row>
        </Container>
            {/* <div>
                <Container>
                    <Col md={{ span: 4, offset: 4 }}>
                    </Col>
                </Container>
            </div> */}
        </>
    )
}

export default ResumePage;