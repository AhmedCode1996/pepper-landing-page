import React from "react";
import InfoImage from "./../../assets/iPhone-13-05.png";
import styled from "styled-components";
function AppInformation() {
  return (
    <Wrapper>
      <h2>عن التطبيق</h2>
      <InfoContent>
        <ImageWrapper>
          <img src={InfoImage} alt="Information screen" />
        </ImageWrapper>
        <ContentWrapper>
          <p>
            بمساعده الذكاء الاصطناعي يعمل التطبيق علي التعرف علي امراض محصاصيل
            الفلفل مبكرا من مجرد صوره ملتقطه بالهاتف لورقه المحصول الخاص بالفلفل
            ويتعرف التطبيق سريعا اذاكانت ثمره الفلفل مصابه ام صحيحه لا تعاني من
            اي امراض التطبيق سهل الاستخدام باللغه العربيه وليس مجرد تطبيق لتحديد
            والكشف علي امراض الفلفل في المحاصيل لكن بيقدم حلول كامله للمزارع علي
            هيئه تطبيق حيث انه يقدم مساعده كامله حول اسباب المرض وما هي الاجرءات
            المناسبه التي يجب اتخاذه في هذه الحالات وما هي الطرق لعلاج الامراض
            في مراحلها الاولي
          </p>
        </ContentWrapper>
      </InfoContent>
    </Wrapper>
  );
}

export default AppInformation;

const Wrapper = styled.section`
  padding-inline: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoContent = styled.div`
  background-color: #e3ca92;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 40px;
`;
const ImageWrapper = styled.div`
  flex-basis: 40%;
  transform: scale(1.2);
`;
const ContentWrapper = styled.div`
  flex-basis: 60%;
`;
