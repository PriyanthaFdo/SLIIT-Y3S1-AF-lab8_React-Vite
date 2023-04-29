import '../assets/styles/card.css'

export default function Card(props){
  const image = props.image;
  const title = props.title;
  const description = props.description;
  return(
    <>
      <div id="productCard">
        <h3>{title ?? "Title"}</h3>
        <img src={image} alt="image" className='img-thumbnail img-fluid'/><br />
         {description}
      </div>
    </>
  );
}