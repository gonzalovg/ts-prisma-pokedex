"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const pokemon_1 = __importDefault(require("./routes/pokemon"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('tiny'));
app.use('/api/v1/pokemons', pokemon_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
});
module.exports = app;
