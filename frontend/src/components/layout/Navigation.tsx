import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className="navCustom">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/Room">Room</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/">Room</Nav.Link>
        </Nav.Item>
    </Nav>
  );
};

export default Navigation;