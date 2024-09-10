import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './style.css'

function Footer() {

    return (
        <>
            <Container fluid id="full-footer">

                <Stack direction="horizontal" gap={5}>
                    
                    <a id="github-link" href="https://github.com/mankovich">GitHub Profile</a>
                    
                    
                    <a id="linkedin-link" href="www.linkedin.com/in/joey-mankovich-2135b957" >LinkedIn Profile</a>
                    
                   
                    <p id="copyright" >&copy;2024 Mankovich</p>
                    
                </Stack>
            </Container>
        </>
    )
}

export default Footer;