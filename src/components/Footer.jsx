import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <center>
        <br />
        <br />
        <hr />
        Copyright © 2023 KJP. All rights reserved.{"  |  "}
        <a href="https://www.instagram.com/">Instagram</a>{"  |  "}
        <a href="https://www.linkedin.com/">LinkedIn</a>{"  |  "}
        <Link to="https://github.com/" >GitHub</Link>
      </center>
    </>
  );
}