import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarTop = () => {
  return (

    <Navbar bg="dark" className="mb -4" style={{ height: "3.75rem" }} >
      <Container>
        <h2>
        <Link to ="/" className="link-light text-decoration-none">
        ChatApp
        </Link>
      </h2>
        <span className="text-warning" >Logged in as Hrithik Keswani</span>
      
      <Nav>
        <Stack direction="horizontal" gap={3}>
        <Link to ="/login" className="link-light text-decoration-none">
        Login   
        </Link>
        <Link to ="/register" className="link-light text-decoration-none">
        Regsiter   
        </Link>
        </Stack>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;