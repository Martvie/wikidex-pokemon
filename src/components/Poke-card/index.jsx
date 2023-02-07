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
                    {types[0]?  <PokeTypes variant={"small"} pokeType={types[0].type.name} />: null}
                    {types[1]?  <PokeTypes variant={"small"} pokeType={types[1].type.name} />: null}
                </Line>
                 </StatsContainer>
        </CardContainer>
    )
}

export {PokeCard}