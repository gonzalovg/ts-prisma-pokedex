import { Query, Resolver } from "type-graphql";
import pokemonService from "../services/pokemonService";
import { Pokemon } from "../typedefs/pokemon";


@Resolver()
export class PokemonResolver {
    @Query(() => [Pokemon])
    async getPokemons() {
        return await pokemonService.getPokemons();
    }

    // @Query(() => [Pokemon])
    // async getPokemonsByType(
    //     @Arg('type_1') pokemonType: string,
    // ) {
    //     return pokemonService.getPokemonsByType(pokemonType)
    // }


}