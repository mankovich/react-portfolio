import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import { useLocation } from 'react-router-dom'
import './style.css'

function Header() {
    const location = useLocation();
    console.log(location)
    return (
        <>
            <Container fluid id="full-header">
                <Row>
                    <Col lg={8}>
                        <div>
                            <h1 id="name-title">Joey Mankovich</h1>
                        </div>
                    </Col>
                    <Col lg={4}>

                        <Nav variant="tabs" defaultActiveKey={location.pathname} className="justify-content-end">
                            <Nav.Item >
                                <Nav.Link href="/aboutme" className="page-tab">About Me</Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/portfolio" className="page-tab">Portfolio</Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact" className="page-tab">Contact</Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/resume" className="page-tab">Resume</Nav.Link>

                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>


                

            </Container>
        </>
    )
}

export default Header;