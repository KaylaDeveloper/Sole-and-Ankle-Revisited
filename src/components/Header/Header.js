import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";
import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileHeaderWrapper>
        <LeftSide>
          <Logo />
        </LeftSide>
        <RightSide>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
          <MobileMenu
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
            title="Navigation"
          />
        </RightSide>
      </MobileHeaderWrapper>
    </header>
  );
};
const MobileHeaderWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    border-top: 4px solid ${COLORS.gray[900]};
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding: 16px 20px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 90px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(16px, 3.2vw + 1rem, 48px);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
