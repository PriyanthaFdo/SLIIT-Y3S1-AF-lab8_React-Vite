import Banner from "../components/Banner";

import assetImage from '../assets/img/image2.jpg';

export default function Banners(){
  return(
    <>
      <Banner image={assetImage} label="This is a Banner with background Image" />
      <Banner color="pink" label="This is a Banner with background Color" />
    </>
  )
}