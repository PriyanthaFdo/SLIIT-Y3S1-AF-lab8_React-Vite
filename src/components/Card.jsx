import '../assets/styles/card.css';

import noImage from "../assets/img/noProductImage.jpg";

export default function Card(props){
  const image = props.image ?? noImage;
  const title = props.title;
  const description = props.description;
  return(
    <>
      <div id="productCard">
        <h3>{title ?? "Title"}</h3>
        <img src={image} alt="image" className='img-thumbnail img-fluid'/><br />
         {description ?? "Image description"}
      </div>
    </>
  );
}