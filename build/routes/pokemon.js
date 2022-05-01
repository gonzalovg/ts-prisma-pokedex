"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
// import { pokemons_mini } from '@prisma/client'
const express_1 = require("express");
const pokemonService = __importStar(require("../services/pokemon"));
const pokemonRouter = (0, express_1.Router)();
// todo:funcion que recoja varios args de get request y ejecute consulta
pokemonRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    if (query.type) {
        res.json(pokemonService.getPokemonsByType(query.type));
    }
    else {
        res.json(pokemonService.getPokemons());
    }
}));
pokemonRouter.get('/:pokemon', (req, res) => {
    const pokemonName = req.params.pokemon;
    (() => __awaiter(void 0, void 0, void 0, function* () {
        res.send(yield pokemonService.getPokemon(pokemonName));
    }))();
});
// const pokemon = {
//   pokedex_number: req.body.pokedex_number as number,
//   name: req.body.name as string,
//   generation: req.body.generation as number,
//   status: req.body.status as string,
//   species: req.body.species as string,
//   type_1: req.body.type_1 as pokemonType,
//   type_2: req.body.type_2 as pokemonType,
//   height_m: req.body.height_m as number,
//   weight_kg: req.body.weight_kg as number,
//   ability_1: req.body.ability_1 as string,
//   ability_2: req.body.ability_2 as string,
//   ability_hidden: req.body.ability_hidden as string,
//   hp: req.body.hp as number,
//   attack: req.body.attack as number,
//   defense: req.body.defense as number,
//   sp_attack: req.body.sp_attack as number,
//   sp_defense: req.body.sp_defense as number,
//   speed: req.body.speed as number
// }
pokemonRouter.post('/', (req, res) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const pokemon = {
            pokedex_number: +req.body.pokedex_number,
            name: req.body.name,
            generation: +req.body.generation,
            status: req.body.status,
            species: req.body.species,
            type_1: req.body.type_1,
            type_2: req.body.type_2,
            height_m: +req.body.height_m,
            weight_kg: +req.body.weight_kg,
            ability_1: req.body.ability_1,
            ability_2: req.body.ability_2,
            ability_hidden: req.body.ability_hidden,
            hp: +req.body.hp,
            attack: +req.body.attack,
            defense: +req.body.defense,
            sp_attack: +req.body.sp_attack,
            sp_defense: +req.body.sp_defense,
            speed: +req.body.speed
        };
        try {
            yield pokemonService.addPokemon(pokemon);
            res.sendStatus(204);
        }
        catch (err) {
            console.log(err);
            res.send(500);
        }
    }))();
});
pokemonRouter.delete('/:pokemon', (req, res) => {
    const pokemonName = req.params.pokemon;
    (() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield pokemonService.deletePokemon(pokemonName);
            res.sendStatus(204);
        }
        catch (err) {
            res.send({ error: err });
        }
    }))();
});
pokemonRouter.put('/:pokemon', (req, res) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const pokemonData = {
            pokedex_number: +req.body.pokedex_number,
            name: req.body.name,
            generation: +req.body.generation,
            status: req.body.status,
            species: req.body.species,
            type_1: req.body.type_1,
            type_2: req.body.type_2,
            height_m: +req.body.height_m,
            weight_kg: +req.body.weight_kg,
            ability_1: req.body.ability_1,
            ability_2: req.body.ability_2,
            ability_hidden: req.body.ability_hidden,
            hp: +req.body.hp,
            attack: +req.body.attack,
            defense: +req.body.defense,
            sp_attack: +req.body.sp_attack,
            sp_defense: +req.body.sp_defense,
            speed: +req.body.speed
        };
        const pokemonToUpdate = req.params.pokemon;
        try {
            yield pokemonService.updatePokemon(pokemonData, pokemonToUpdate);
            res.sendStatus(204);
        }
        catch (err) {
            res.send({ error: err });
        }
    }))();
});
exports.default = pokemonRouter;
