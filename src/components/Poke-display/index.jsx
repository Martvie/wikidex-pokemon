import { PokeTypes } from "../Poke-types";
import { Button } from "../Button";

import {
    Caracteristicas,
    Descritor,
    DisplayContainer,
    Image,
    ImageContainer,
    InfoContainer,
    Name,
    Options,
} from "./styles";

const PokeDisplay = ({ image, name, height, weight, save, more, types }) => {
    return (
        <DisplayContainer>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <Options>
                <Button onClick={save} name={"Salvar"} />
            </Options>
            <InfoContainer>
                <Name>{name}</Name>
                <Descritor>
                    Tipos:

                    {types.map((types) => {
                        return <PokeTypes pokeType={types.type.name} />;
                    })}

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
