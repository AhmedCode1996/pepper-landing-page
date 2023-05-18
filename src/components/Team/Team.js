import Members from "./../../assets/table.png";
import Logo from "./../../assets/eelu-logo.png";
import styled from "styled-components";
function Team() {
  return (
    <Wrapper>
      <h2 className="wrapper-title" style={{ textAlign: "center" }}>
        فريق العمل
      </h2>
      <Content>
        <MembersWrapper>
          <img src={Members} alt="Members Screen" />
        </MembersWrapper>
        <ContentWrapper>
          <p>
            هذا التطبيق تم تنفيذه من ضمن مشروع التخرج الخاص بالفرقه الرابعه كليه
            حاسبات وتكنولوجيا المعلومات
          </p>
          <h2>الجامعة المصرية للتعلم الإلكترونى الأهلية</h2>
          <img src={Logo} alt="University Logo" />
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}

export default Team;

const Wrapper = styled.div`
  padding: 80px 32px;

  .wrapper-title {
    font-size: 4rem;
    font-family: "Tajawal", sans-serif;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 24px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  padding: 16px;
`;

const MembersWrapper = styled.div``;
const ContentWrapper = styled.div`
  p {
    font-family: "Tajawal", sans-serif;
    font-size: 2rem;
    text-align: right;
    font-weight: bold;
    line-height: 1.3;
  }
  h2 {
    font-family: "Tajawal", sans-serif;
    font-size: 1.8rem;
    text-align: center;
    font-weight: bold;
    color: hsl(223.8deg 58.14% 33.73%);
  }
`;
