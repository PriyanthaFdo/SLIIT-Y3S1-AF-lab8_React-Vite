import Card from "../components/Card";

import assetImage from "../assets/img/product1.jpg";

export default function () {
  return (
    <>
      <Card
        title="Web image"
        description="Hello. This image is rendered by passing a image url link to the Card component"
        image="https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg"
      />

      <Card
        title="Asset Image"
        description="The image in this card is loaded from the local assets file"
        image={assetImage}
      />

      <Card
        title="No Image"
        description="The defined image does not exist in this card"
        image=""
      />

      <Card
        title="No Image"
        description="An image is not defined in this card"
      />
    </>
  );
}