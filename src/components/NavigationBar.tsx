import {Container, Navbar, Nav} from "react-bootstrap";

const NavigationBar = () => {
    return <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavigationBar
