import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const ItemWrapper = styled.div`
    grid-area: s;
    padding-top:10px 10px;
    background-color: #ffe3e3;;
`;
const Pic = styled.img`
    width: 50px;
    height: 50px;
    color: #505050;
`;
const Item = styled.div`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     padding: 10px 30px;
`;

const Text = styled.span`
    text-transform: uppercase;
    font-weight: 500;
    color: #505050;
    &:hover {
        color:brown;
    }
    

`;

const NavBarLink = styled(NavLink)`
    text-decoration: none;
    &.${props => props.isActive ? 'green' : 'red'} 
`;

const Services = () => {
    return (
     <ItemWrapper>
        <NavBarLink to="/cosmetology">
            <Item>
                <Pic src={require("./Items/img/cream.png")} alt=""/>
                <Text>cosmetology</Text>
            </Item>
        </NavBarLink>
        <NavBarLink to="/nails">
            <Item>
                <Pic src={require("./Items/img/nail-polish.png")} alt=""/>
                <Text>nails</Text>
            </Item>
        </NavBarLink>
        <NavBarLink to="/hair">
            <Item>
                <Pic src={require("./Items/img/hair-dryer.png")} alt=""/>
                <Text>hair</Text>
            </Item>
        </NavBarLink>
        <NavBarLink to="/massage">
            <Item>
                <Pic src={require("./Items/img/massage.png")} alt=""/>
                <Text>massage</Text>
            </Item>
        </NavBarLink>
        <NavBarLink to="/eyebrows">
            <Item>
                <Pic src={require("./Items/img/eyebrow.png")} alt=""/>
                <Text>eyebrows</Text>
            </Item>
        </NavBarLink>
        <NavBarLink to="/makeup">
            <Item>
                <Pic src={require("./Items/img/lipstick.png")} alt=""/>
                <Text>makeup</Text>
            </Item>
        </NavBarLink>
     </ItemWrapper>
    )
}
export default Services;