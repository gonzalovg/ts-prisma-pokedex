export type pokemonType = 'Ice' | 'Water' | 'Grass' | 'Dragon' | 'Fairy' | 'Electric' | 'Normal' | 'Psychic' | 'Bug' | 'Fire' | 'Poison' | 'Steel' | 'Fighting' | 'Flying' | 'Dark' | 'Ground' | 'Ghost' | 'Rock'
// export type growthRate = 'Medium Slow' | 'Erratic' | '' | 'Fluctuating' | 'Medium Fast' | 'Slow' | 'Fast'
// export type eggType = 'Grass' | 'Dragon' | 'Fairy' | 'Mineral' | 'Undiscovered' | 'Monster' | 'Bug' | 'Water 3' | 'Water 2' | 'Amorphous' | 'Human-Like' | '' | 'Flying' | 'Water 1' | 'Field' | 'Ditto'

export interface Pokemon {
    pokedex_number: number
    name: string
    generation: number
    status: string
    species: string
    type_1: pokemonType
    type_2: pokemonType
    height_m: number
    weight_kg: number
    ability_1: string
    ability_2: string
    ability_hidden: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
}
