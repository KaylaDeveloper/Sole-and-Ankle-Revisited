/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss, title }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label={title}>
        <CloseButton onClick={onDismiss}>
          <Icon id={"close"}></Icon>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};
const Overlay = styled(DialogOverlay)``;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.white};
  padding: 32px 10px 32px 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  gap: 8px;
`;

const CloseButton = styled.button`
  border: none;
  background-color: ${COLORS.white};
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  color: ${COLORS.gray[900]};
  text-decoration: none;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;
export default MobileMenu;
