import { React, useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { BoxTitle, Container, Title } from './PokemonsListPageStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'



function PokemonListPage() {
    const context = useContext(GlobalContext);
    const { pokemonsList } = context;

    return(
        <Container>
            <BoxTitle>
                <Title> Todos os Pokémons </Title>
            </BoxTitle>
            {pokemonsList.map((pokemon) => {
                return <PokemonCard 
                key={pokemon.name}
                url={pokemon.url} />
            })}
        </Container>
    );
}

export default PokemonListPage;

