import { Query, Resolver, Arg } from "type-graphql";
import pokemonService from "../services/pokemonService";
import { Pokemon } from "../typedefs/pokemon";


@Resolver()
export class PokemonResolver {
    @Query(() => [Pokemon])
    async getPokemons() {
        return await pokemonService.getPokemons();
    }

    @Query(() => [Pokemon])
    async getPokemonsByType(
        @Arg('type', _type => String) pokemonType: string,
    ) {
        return pokemonService.getPokemonsByType(pokemonType)
    }

    @Query(() => [Pokemon])
    async getPokemon(
        @Arg('pokemon_name', _type => String) pokemonName: string
    ) {
        return pokemonService.getPokemon(pokemonName)
    }
    
    @Query(() => [Pokemon])
    async getPokemonsByGeneration(
        @Arg('generation', _type => Number) generation: number
    ) {
        return pokemonService.getPokemonsByGeneration(generation)
    }
    
    @Query(() => [Pokemon])
    async deletePokemon(
        @Arg('pokemon_name', _type => String) pokemon_name: string
    ) {
        pokemonService.deletePokemon(pokemon_name)
    }


}