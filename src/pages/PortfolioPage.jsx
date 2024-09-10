import PortfolioCard from '../components/portfolioCard/index.jsx'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import persBlog from '../assets/pers-blog.jpg'
import bathroomFinder from '../assets/bathroom-finder.jpg'
import wiiCode from '../assets/wii-code.jpg'
import noteTaker from '../assets/note-taker.jpg'
import taskBoard from '../assets/task-board.jpg'
import onIt from '../assets/on-it.jpg'
import '../index.css'

function PortfolioPage() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <PortfolioCard
                            image={persBlog}
                            alt={'screenshot of personal blog'}
                            name={'Personal Blog'}
                            gitHubRepo={'https://github.com/mankovich/personal-blog'}
                            deployedURL={'https://mankovich.github.io/personal-blog/'}
                        />
                    </Col>
                    <Col>
                        <PortfolioCard
                            image={bathroomFinder}
                            name={'Bathroom Finder'}
                            gitHubRepo={'https://github.com/dmoneybags/project-1-Bathroom-Finder'}
                            deployedURL={'https://dmoneybags.github.io/project-1-Bathroom-Finder/'}
                        />
                    </Col>
                    <Col>
                        <PortfolioCard
                            image={wiiCode}
                            name={'WiiCode'}
                            gitHubRepo={'https://github.com/mankovich/wii-code'}
                            deployedURL={'https://wii-code.netlify.app/'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PortfolioCard
                            image={noteTaker}
                            name={'Note Taker'}
                            gitHubRepo={'https://github.com/mankovich/note-taker'}
                            deployedURL={'https://note-taker-exxr.onrender.com/notes'}
                        />
                    </Col>
                    <Col>
                        <PortfolioCard
                            image={taskBoard}
                            name={'Task Board'}
                            gitHubRepo={'https://github.com/mankovich/task-board'}
                            deployedURL={'https://mankovich.github.io/task-board'}
                        />
                    </Col>
                    <Col>
                        <PortfolioCard
                            image={onIt}
                            name={'OnIt'}
                            gitHubRepo={'https://github.com/Preksha2408/Full-stack-application-Project-2'}
                            deployedURL={'https://full-stack-application-project-2.onrender.com/'}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PortfolioPage;