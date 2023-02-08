import { useState } from "react";
import { Header } from "../../components/Header";
import { PokeDisplay } from "../../components/Poke-display";
import { PokeCard } from "../../components/Poke-card";

import { Column, MainContent } from "./styles";

const Home = () => {
    const [nameOrId, setNameOrId] = useState("ditto");
    const [pokemon, setPokemon] = useState(null);
    const [pokeList, setPokeList] = useState([]);

    const handlePokemonSearch = async () => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nameOrId.toLocaleLowerCase()}`
        ).then((response) => response.json());

        const { name, height, weight, id, stats, types } = response;
        const sprite = response["sprites"]["versions"]["generation-v"][
            "black-white"
        ]["animated"]["front_default"];
        const spriteStatic = response.sprites.front_default;

        setPokemon({ name, height, weight, id, stats, types, sprite, spriteStatic});
    };

    const handleAddPokemon = () => {
        if (pokeList.length < 10) {
            const {stats, types, spriteStatic, id} = pokemon;
            const data = {stats, types, spriteStatic, id};
            if (data.id) {
                const exist = pokeList.find((poke) => poke.id === data.id);

                if (!exist) {
                    setPokeList((prev) => [...prev, data]);

                    return;
                }
            }
            alert("Esse pokemon já consta na lista!");
        } else {
            alert("Sua lista deve ter um máximo de 10 pokemons!");
        }
    };

    const handleRemoveFromList = (id) =>{
    setPokeList(pokeList.filter(poke => poke.id !== id))
    }

    return (
        <>
            <Header
                onClick={handlePokemonSearch}
                onChange={(event) => setNameOrId(event.target.value)}
            />
            <MainContent>
                {pokemon ? (
                    <Column>
                        <PokeDisplay
                            name={pokemon.name}
                            height={pokemon.height}
                            weight={pokemon.weight}
                            image={pokemon.sprite}
                            save={handleAddPokemon}
                            types={pokemon.types}
                        />
                    </Column>
                ) : null}
                <Column></Column>
                {pokeList ? (
                    <Column>
                        {pokeList.map((poke) => (
                            <PokeCard
                                image={poke.spriteStatic}
                                hp={poke.stats[0].base_stat}
                                atk={poke.stats[1].base_stat}
                                def={poke.stats[2].base_stat}
                                background={poke.types[0].type.name}
                                types={poke.types}
                                id={poke.id}
                                key={poke.id}
                                handleRemoveFromList={handleRemoveFromList}
                                
                            />
                        ))
                        }
                    </Column>
                ) : null}
            </MainContent>
        </>
    );
};

export { Home };
