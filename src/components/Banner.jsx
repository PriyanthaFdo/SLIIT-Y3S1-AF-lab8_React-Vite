import "../assets/styles/banner.css";

export default function Banner(props){
  const bg_Image = props.image;
  const bg_color = props.color;
  const label = props.label;

  return(
    <>
      <div 
        id="myBanner"
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: bg_color, 
          backgroundImage: `url(${bg_Image})`,
          backgroundSize: 'cover'
        }}
      >
        <h1>{label}</h1>
      </div>
    </>
  );
}