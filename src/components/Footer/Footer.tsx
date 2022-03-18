import styled from "styled-components";

const Futer = styled.footer`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  background-color: #f37370;
  align-items: center;
  color: white;
  height: 15vh;
  bottom: 0;
  box-shadow: 0px 0px 10px white;
  @media (min-width: 450px) {
    height: 8vh;
    width: 100%;
  }
`;
const HacQuatre = styled.h4`
  font-size: 12px;
  font-weight: lighter;
  margin: 0;
  @media (min-width: 400px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 80%;
  filter: drop-shadow(0px 0px 3px black);
  @media (min-width: 400px) {
    height: 60%;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Futer>
      <HacQuatre>MENU</HacQuatre>
      <Image src={require("../../logo.png")} alt="Nicest Shrink Logo" />
    </Futer>
  );
};

export default Footer;
