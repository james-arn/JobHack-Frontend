import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: whitesmoke;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #ff914d;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  color: black;
  position: relative;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #ff914d;
  }
`;

export const Logo = styled.div`
  padding: 1rem;
`;

export default Nav;
