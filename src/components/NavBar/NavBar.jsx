import { Link } from 'react-router-dom';

const NavBar = ({ user, setUser }) => {
  const handleLogout = () => setUser(null);

  return (
    <nav>
      <span>React Movies</span>
      &nbsp; | &nbsp;
      <span>Hello, <strong>{user}</strong>!</span>
      &nbsp; | &nbsp;
      <Link to='/'>Movies List</Link>
      &nbsp; | &nbsp;
      <Link to='/actors'>Actors List</Link>
      &nbsp; | &nbsp;
      <Link to='/' onClick={handleLogout}><strong>Logout</strong></Link>
    </nav>
  );
}

export default NavBar;
