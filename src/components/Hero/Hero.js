import HeroImage from "./../../assets/Screens.png";
import styled from "styled-components";
function Hero() {
  return (
    <Wrapper>
      <LeftSide>
        <ImageWrapper>
          <img src={HeroImage} alt="Hero Screen" />
        </ImageWrapper>
      </LeftSide>
      <RightSide>
        <h1>حافظ على صحة محاصيلك</h1>
        <p>التطبيق الاول للتعرف على أمراض الفلفل مبكرا بالذكاء الاصطناعى</p>
        <ButtonGroup>
          <button>احصل على التطبيق</button>
          <button>افحص محصولك الان</button>
        </ButtonGroup>
      </RightSide>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div``;
const ImageWrapper = styled.div`
  max-width: 80%;
`;
const RightSide = styled.div`
  padding-inline: 32px;

  h1,
  p {
    text-align: right;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
