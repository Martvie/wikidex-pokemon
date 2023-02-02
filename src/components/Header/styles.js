import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 2.5rem;
    background-color: #cd533b;
    border-radius: 0.2rem;

    display: flex;
    align-items: center;
`

export const Input  = styled.input`
    width: 70%;
    height: 1rem;
    padding: 1rem;
    border: 0;
    border-radius: 0.3rem;
`

export const Button = styled.button`

width: fit-content;
height: 2rem;
padding: 0.8rem;
margin: 0.5rem;

display: flex;
align-items: center;

border-radius: 0.8rem;
border: 2.5px solid #E0E1E4;
box-shadow: 0px 0px 20px -20px;
cursor: pointer;
background-color: white;
transition: all 0.2s ease-in-out 0ms;
user-select: none;
font-family: 'Poppins', sans-serif;


&:hover {
  background-color: #F2F2F2;
  box-shadow: 0px 0px 20px -18px;
}

&:active {
  transform: scale(0.95);
}
`