import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import { BoxTitlePokedex, ContainerPokedex, TitlePokedex } from './PokedexPageStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'


function PokedexPage() {
    const context = useContext(GlobalContext);
    const { pokedex } = context;

    return(
        <>
            <Header />
                <BoxTitlePokedex>
                    <TitlePokedex>
                        Meus Pokémons
                    </TitlePokedex>
                </BoxTitlePokedex>
            <ContainerPokedex>
                {pokedex.map((pokemon) => {
                    return(
                        <PokemonCard
                          key={pokemon.name}
                          url={pokemon.url}
                        />
                    );
                })}
            </ContainerPokedex>
        </>
    );
}

export default PokedexPage