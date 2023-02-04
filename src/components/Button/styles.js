import styled from "styled-components"

export const ButtonContainer = styled.button`

width: 6rem;
height: 2rem;
padding: 0.8rem;
margin: 0.5rem;

display: flex;
align-items: center;
justify-content: center;

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