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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { pokemons_mini } from '@prisma/client'
const express_1 = require("express");
const pokemon_1 = __importDefault(require("../services/pokemon"));
const utils_1 = require("../utils");
const pokemonRouter = (0, express_1.Router)();
// todo:funcion que recoja varios args de get request y ejecute consulta
pokemonRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const type = query.type;
    const generation = +query.generation;
    // basado en la cantidad de argumentos, inicialmente se puede filtral por tipo para hacer menos iteraciones en el filter
    const initialPokemons = type !== undefined
        ? yield pokemon_1.default.getPokemonsByType(type)
        : yield pokemon_1.default.getPokemons();
    const finalPokemons = !isNaN(generation)
        ? yield initialPokemons.filter(pokemon => pokemon.generation === generation)
        : yield initialPokemons;
    res.send((0, utils_1.recordCountFormat)(finalPokemons));
}));
pokemonRouter.get('/:pokemon', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonName = req.params.pokemon;
    const pokemon = yield pokemon_1.default.getPokemon(pokemonName);
    res.send((0, utils_1.recordCountFormat)(pokemon));
}));
pokemonRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemon = req.body;
        yield pokemon_1.default.addPokemon(pokemon);
        res.sendStatus(204);
    }
    catch (err) {
        console.error({ error: err.message });
        res.send(500);
    }
}));
pokemonRouter.delete('/:pokemon', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemonName = req.params.pokemon;
        yield pokemon_1.default.deletePokemon(pokemonName);
        res.sendStatus(204);
    }
    catch (err) {
        res.send({ error: err.message });
    }
}));
pokemonRouter.put('/:pokemon', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonData = req.body;
    const pokemonToUpdate = req.params.pokemon;
    try {
        yield pokemon_1.default.updatePokemon(pokemonData, pokemonToUpdate);
        res.sendStatus(204);
    }
    catch (err) {
        res.send({ error: err.message });
    }
}));
exports.default = pokemonRouter;
