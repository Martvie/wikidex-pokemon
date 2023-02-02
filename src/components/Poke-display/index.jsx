import { PokeTypes } from "../Poke-types";

import {
    Caracteristicas,
    Descritor,
    DisplayContainer,
    Image,
    ImageContainer,
    InfoContainer,
    Name,
    Options,
    Button,
} from "./styles";

const PokeDisplay = ({ image, name, height, weight, save, more, types }) => {
    return (
        <DisplayContainer>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <Options>
                <Button onClick={more}> Saiba Mais</Button>
                <Button onClick={save}> Salvar</Button>
            </Options>
            <InfoContainer>
                <Name>{name}</Name>
                <Descritor>
                    Tipos:  
                      
                    {types[0]?  <PokeTypes pokeType={types[0].type.name} />: null}
                    {types[1]?  <PokeTypes pokeType={types[1].type.name} />: null}
                
                    
                </Descritor>
                <Caracteristicas>
                    <Descritor>Altura: {height / 10}m</Descritor>
                    <Descritor>Peso: {weight / 10}Kg</Descritor>
                </Caracteristicas>
            </InfoContainer>
        </DisplayContainer>
    );
};

export { PokeDisplay };
