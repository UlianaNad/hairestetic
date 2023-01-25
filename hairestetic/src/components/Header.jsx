import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    grid-area: h;
    background-color: #e9d7d7;
`;


const Menu = styled.div`

`;

const MenuItem = styled.a`
    padding: 0px 20px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    &:hover {
        color: #105b72c2;
      }
    font-size: 25px;
`;

const Pic = styled.img`
    width: 150px;
    height: 150px;
    padding: 10px;
`;
const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/#">
                <Pic src={require("./logo.png")} alt=""/>
            </NavLink>
            <Menu>
                <MenuItem href="#">our story</MenuItem>
                <MenuItem href="#">services and prices</MenuItem>
                <MenuItem href="#">our team</MenuItem>
                <MenuItem href="#">contact</MenuItem>
            </Menu>
        </MainHeader>
    )
}
export default Header;