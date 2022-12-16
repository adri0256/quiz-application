import { Nav } from 'react-bootstrap';
import { Switch, useDarkreader } from 'react-darkreader';

const Navigation = () => {
  const [isDark, { toggle }] = useDarkreader(false);
  
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
        <Nav.Item>
          <Switch checked={isDark} onChange={toggle} />
        </Nav.Item>
    </Nav>
  );
};

export default Navigation;