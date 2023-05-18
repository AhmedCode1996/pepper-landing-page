import Logo from "./../../assets/bell-pepper.png";
import styled from "styled-components";
function Header() {
  return (
    <NavHeader>
      <NavList>
        <li>
          <a href="/">افحص محصولك الان</a>
        </li>
        <li>
          <a href="/">تواصل معنا</a>
        </li>
        <li>
          <a href="/">فريق العمل</a>
        </li>
        <li>
          <a href="/">المميزات</a>
        </li>
        <li>
          <a href="/">عن التطبيق</a>
        </li>
        <li>
          <a href="/">الرئيسية</a>
        </li>
        <li>
          <a href="/">
            <Icon src={Logo} alt="bell pepper" />
          </a>
        </li>
      </NavList>
    </NavHeader>
  );
}

export default Header;

const NavHeader = styled.nav`
  padding: 32px;
  /* border: solid black; */
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px;
  /* border: solid black; */

  li:last-of-type {
    margin-left: auto;
  }
`;
const Icon = styled.img`
  width: 70px;
  min-width: 70px;
`;
