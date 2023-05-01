import CustomButton from "../components/CustomButton";

export default function Buttons() {
  return (
    <>
      <center>
        <CustomButton text="default Button" /><br />
        <hr />
        <CustomButton text="primary Btn" type="primary" /><br />
        <CustomButton text=" Secondary Btn" type="secondary" /><br />
        <CustomButton text=" success Btn" type="success" /><br />
        <CustomButton text=" danger Btn" type="danger" /><br />
        <CustomButton text=" warning Btn" type="warning" /><br />
        <CustomButton text=" info Btn" type="info" /><br />
        <CustomButton text=" light Btn" type="light" /><br />
        <CustomButton text=" dark Btn" type="dark" /><br />
        <hr />
        <CustomButton text="small size" type="info" size="small" /><br />
        <CustomButton text="big size" type="info" size="big" /><br />
        <CustomButton text="normal size" type="info" size="" /><br />
        <CustomButton text="wide size" type="info" size="wide" /><br />
        <CustomButton text="extra Wide size" type="info" size="extraWide" /><br />
      </center>
    </>
  );
}