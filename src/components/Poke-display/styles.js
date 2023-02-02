import styled from "styled-components";

export const DisplayContainer = styled.div`
    width: 20rem;
    height: 30rem;
    margin: 1rem;

    background-color: #fd0100;
    border-radius: 1rem;
    box-shadow: 16px 22px 10px 0px rgba(0,0,0,0.1);
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageContainer = styled.div`
    height: 40%;
    width: 70%;
    margin: 0.5rem;

    background: #FFFFF0;
    
    border: 0.5rem solid #000000;
    border-radius: 1rem;
    overflow: hidden;
    

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Image = styled.img`
    height: 10rem;
`
export const InfoContainer = styled.p`
    height: 54%;
    width: 90%;
    margin: 1rem;
    border-radius: 1rem;
    font-family: 'Adamina', serif;

    background: #e30613;
    
`


export const Name = styled.h1`
    font-size: 1.5rem;
    margin: 0.5rem;
    
    text-transform: capitalize;
    font-family: 'Press Start 2P', cursive;
`

export const Descritor = styled.p`
    font-size: 1.3rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
`

export const Caracteristicas = styled.div`
    width: 100%;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Options = styled.div`
    width: 100%;
    height: 2.5rem;
    
    margin: 1rem;

    display: flex;
    justify-content: space-evenly;
`
export const Button = styled.button`
    height: 2rem;
    width: 4.5rem;

    border: 0;
    border-radius: 1rem;

    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
`
