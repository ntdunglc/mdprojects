import * as ReactBootstrap from "react-bootstrap";

function Navbar() {
    return (
        <ReactBootstrap.Navbar bg="dark" variant="dark" expand="lg">
            <ReactBootstrap.Navbar.Brand href="#home">Software-Programming </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#link">Contact</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.NavDropdown title="Algorithm" id="basic-nav-dropdown">
                        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Amdahl's Law</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Divider />
                        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                    </ReactBootstrap.NavDropdown>
                </ReactBootstrap.Nav>
                <ReactBootstrap.Form inline>
                    <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
                </ReactBootstrap.Form>
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
    )
}

export default Navbar;