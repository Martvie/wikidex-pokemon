import { TypeContainer } from "./styles";

const PokeTypes = ({ pokeType, variant="normal"}) => {
  
    return (
        <TypeContainer pokeType={pokeType} variant={variant}>
            {pokeType}
        </TypeContainer>
    );
};

PokeTypes.defaultProps = {
    pokeType: "tipoPoke",
};

export { PokeTypes };
