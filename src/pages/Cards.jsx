import Card from "../components/Card";

import assetImage from "../assets/img/image2.jpg";

export default function () {
  return (
    <>
      <Card
        title="Web image"
        description="Hello. This image is rendered by passing a image url link to the Card component"
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
      />

      <Card
        title="Asset Image"
        description="The image in this card is loaded from the local assets file"
        image={assetImage}
      />

      <Card
        title="No Image"
        description="No image is defined for this card"
        image=""
      />
    </>
  );
}