import Photo from "./../../assets/المميزات.png";
import styled from "styled-components";
function Advantages() {
  return (
    <Wrapper>
      <h2>الممزيات </h2>

      <ImageWrapper>
        <img src={Photo} alt="advantages screen" />
      </ImageWrapper>
    </Wrapper>
  );
}

export default Advantages;

const Wrapper = styled.section`
  padding: 100px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div``;
