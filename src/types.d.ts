export type pokemonType = 'Ice' | 'Water' | 'Grass' | 'Dragon' | 'Fairy' | 'Electric' | 'Normal' | 'Psychic' | 'Bug' | 'Fire' | 'Poison' | 'Steel' | 'Fighting' | 'Flying' | 'Dark' | 'Ground' | 'Ghost' | 'Rock'
// export type growthRate = 'Medium Slow' | 'Erratic' | '' | 'Fluctuating' | 'Medium Fast' | 'Slow' | 'Fast'
// export type eggType = 'Grass' | 'Dragon' | 'Fairy' | 'Mineral' | 'Undiscovered' | 'Monster' | 'Bug' | 'Water 3' | 'Water 2' | 'Amorphous' | 'Human-Like' | '' | 'Flying' | 'Water 1' | 'Field' | 'Ditto'

export interface Pokemon {
    pokedex_number: number | null
    name: string
    generation: number | null
    status: string | null
    species: string | null
    type_1: string | null
    type_2: string | null
    height_m: number | null
    weight_kg: number | null
    ability_1: string | null
    ability_2: string | null
    ability_hidden: string | null
    hp: number | null
    attack: number | null
    defense: number | null
    sp_attack: number | null
    sp_defense: number | null
    speed: number | null
}
