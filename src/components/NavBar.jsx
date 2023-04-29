import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
      <a href="#">link 1</a><br />
      <Link to="/button" >Butons Page</Link><br />
      <Link to="/card" >Cards Page</Link><br />
      <Link to="/banner" >Banners Page</Link><br />
      <a href="#">link 5</a><br />
    </>
  );
}
export default NavBar;