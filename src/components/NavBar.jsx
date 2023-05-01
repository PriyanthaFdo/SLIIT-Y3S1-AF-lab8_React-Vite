import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav>
        <center>
          <br />
          <Link to="/" >Home</Link><br />
          <Link to="/card" >Cards Page</Link><br />
          <Link to="/button" >Buttons Page</Link><br />
          <Link to="/banner" >Banners Page</Link><br />
          <Link to="/testimonial" >Testimonials Page</Link><br />
          <hr style={{border: "3px solid red"}}/>
          <br />
          <br />
        </center>
      </nav>

      <Outlet />
    </>
  );
}
export default NavBar;