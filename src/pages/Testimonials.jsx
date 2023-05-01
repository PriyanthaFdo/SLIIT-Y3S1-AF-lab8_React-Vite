import Testimonial from "../components/Testimonial";

import image1 from "../assets/img/image1.jpeg";
import image2 from "../assets/img/image2.jpg";

export default function Testimonials() {
  return (
    <>
      <Testimonial quote="I am not a person. I am The Person" name="Samuel" photo={image1} />
      <Testimonial quote="This is a testimonial where photo and name is not defined" />
      <Testimonial quote="This is a testimonial where the defined photo does not exist" name="Karen" photo="" />
    </>
  );
}