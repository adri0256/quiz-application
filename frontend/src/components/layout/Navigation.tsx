import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className="navCustom glass-effect">
        <Nav.Item>
            <Nav.Link href="/">Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/Room">Room</Nav.Link>
        </Nav.Item>
    </Nav>
  );
};

export default Navigation;