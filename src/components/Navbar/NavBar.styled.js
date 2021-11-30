import styled from "styled-components";

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: whitesmoke;
`;

export const Hamburger = styled.div``;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
  }
`;

export const MenuLink = styled.ul`
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: red;
  }
`;

export const Logo = styled.div`
  padding: 1rem;
`;

export default Nav;
