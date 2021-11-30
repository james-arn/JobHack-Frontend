import styled from "styled-components";

export const Container = styled.div`
display: flex; 
`

export const Left = styled.div`
width: 50%;
height: 100vh;
margin-left: 10%;
margin-top: 20%;
`

export const Right = styled.div`
width 50%;
height: 100vh;
background-image: linear-gradient(#FF914D, #EF5C1B);
`

export const StyledInput = styled.input`
margin: 10px;
padding: 5px;
width: 328px;
height: 42px;
left: 115px;
border: none;
background: rgba(196, 196, 196, 0.36);
border-radius: 10px;
display: block;
`

export const StyledButton = styled.button`
margin: 10px;
padding: 10px;
background: #FF914D;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
display: block;
`