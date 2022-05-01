"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePokemon = exports.deletePokemon = exports.addPokemon = exports.getPokemon = exports.getPokemonsByGeneration = exports.getPokemonsByType = exports.getPokemons = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPokemons = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.pokemons_mini.findMany({ orderBy: { pokedex_number: 'asc' } });
});
exports.getPokemons = getPokemons;
const getPokemonsByType = (type) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemons = yield prisma.pokemons_mini.findMany({ where: { OR: [{ type_1: { equals: type.toLowerCase(), mode: 'insensitive' } }, { type_2: { equals: type.toLowerCase(), mode: 'insensitive' } }] } });
    yield prisma.$disconnect;
    return pokemons;
});
exports.getPokemonsByType = getPokemonsByType;
const getPokemonsByGeneration = (generationPokemon) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const pokemons = yield prisma.pokemons_mini.findMany({ where: { generation: generationPokemon } });
    yield prisma.$disconnect;
    return pokemons;
});
exports.getPokemonsByGeneration = getPokemonsByGeneration;
const getPokemon = (pokemonName) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const pokemon = yield prisma.pokemons_mini.findMany({ where: { name: { contains: pokemonName, mode: 'insensitive' } } });
    yield prisma.$disconnect;
    return pokemon;
});
exports.getPokemon = getPokemon;
const addPokemon = (pokemon) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    yield prisma.pokemons_mini.create({ data: pokemon });
    yield prisma.$disconnect;
});
exports.addPokemon = addPokemon;
const deletePokemon = (pokemonName) => __awaiter(void 0, void 0, void 0, function* () {
    const prima = new client_1.PrismaClient();
    yield prima.pokemons_mini.delete({ where: { name: pokemonName } });
    yield prima.$disconnect;
});
exports.deletePokemon = deletePokemon;
const updatePokemon = (pokemon, pokemonToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    yield prisma.pokemons_mini.update({
        where: {
            name: pokemonToUpdate
        },
        data: Object.assign({}, pokemon)
    });
    yield prisma.$disconnect;
});
exports.updatePokemon = updatePokemon;
// export const addPokemon = async (pokemon:Object) => {
// }
