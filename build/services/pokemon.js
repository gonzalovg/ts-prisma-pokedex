"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPokemons = () => {
    return prisma.pokemons_mini.findMany({ orderBy: { pokedex_number: 'asc' } });
};
const getPokemonsByType = (type) => {
    return prisma.pokemons_mini.findMany({ where: { OR: [{ type_1: { equals: type.toLowerCase(), mode: 'insensitive' } }, { type_2: { equals: type.toLowerCase(), mode: 'insensitive' } }] } });
};
const getPokemonsByGeneration = (generationPokemon) => {
    return prisma.pokemons_mini.findMany({ where: { generation: generationPokemon } });
};
const getPokemon = (pokemonName) => {
    return prisma.pokemons_mini.findMany({ where: { name: { contains: pokemonName, mode: 'insensitive' } } });
};
const addPokemon = (pokemon) => {
    return prisma.pokemons_mini.create({ data: pokemon });
};
const deletePokemon = (pokemonName) => {
    return prisma.pokemons_mini.delete({ where: { name: pokemonName } });
};
const updatePokemon = (pokemon, pokemonToUpdate) => {
    return prisma.pokemons_mini.update({
        where: {
            name: pokemonToUpdate
        },
        data: pokemon
    });
};
const pokemonService = {
    getPokemons,
    getPokemonsByType,
    getPokemonsByGeneration,
    getPokemon,
    addPokemon,
    deletePokemon,
    updatePokemon
};
exports.default = pokemonService;
