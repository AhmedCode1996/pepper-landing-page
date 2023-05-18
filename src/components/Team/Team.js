import Members from "./../../assets/table.png";
import Logo from "./../../assets/eelu-logo.png";
import styled from "styled-components";
function Team() {
  return (
    <Wrapper>
      <h2 style={{ textAlign: "center" }}>فريق العمل</h2>
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
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  padding: 16px;
`;

const MembersWrapper = styled.div``;
const ContentWrapper = styled.div``;
