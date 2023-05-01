import "../assets/styles/testimonial.css";

import noImage from "../assets/img/noImage.jpg";

export default function Testimonial(props) {
  const quote = props.quote ?? "Enter quote here";
  const name = props.name ?? "Enter Name";
  const photo = props.photo ?? noImage;

  return (
    <>
      <div className="card testimonialCss">
        <h5 className="m-3" >{name}</h5>
        <img className="card-img-top" src={photo} alt="personal image" />
          <div className="card-body">
            <p className="card-text">{quote}</p>
          </div>
      </div>
      <br />
    </>
  );
}