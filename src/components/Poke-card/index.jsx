import {CardContainer, PokeInfo, StatsContainer, Image, Option, OptionsContainer, StatsHp, Line, StatsAtk, StatsDef} from "./styles"; 

import { PokeTypes } from "../Poke-types";


const PokeCard = ({knowMore, handleRemoveFromList, image, hp, atk, def, id, background, types}) => {
    
    const handleRemove = () => {
        handleRemoveFromList(id)
    }

    return(
        <CardContainer  background={background}>
            <PokeInfo>
            <Image src={image}/>
                <OptionsContainer>
                    <Option onClick={handleRemove}>Remover</Option>
                </OptionsContainer>
            </PokeInfo>
            <StatsContainer>
                <Line>HP : <StatsHp hp={hp}/></Line>
                <Line>ATK: <StatsAtk atk={atk}/></Line>
                <Line>DEF: <StatsDef def={def}/></Line>
                <Line>Types
                    {types.map((types) => {
                        return <PokeTypes variant={"small"} pokeType={types.type.name} />;
                    })}
                </Line>
                 </StatsContainer>
        </CardContainer>
    )
}

export {PokeCard}