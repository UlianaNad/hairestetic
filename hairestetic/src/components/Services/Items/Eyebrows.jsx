import React from "react";
import styled from 'styled-components';

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
`;
const Eyebrows = () => {
    return (
        <Item>
            <Pic src={require("./img/eyebrow.png")} alt=""/>
            <Text>Eyebrows</Text>
        </Item>
    )
}
export default Eyebrows;