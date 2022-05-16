import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class Pokemon {
    @Field(() => Number)
    pokedex_number: number 
    @Field(() => String)
    name: string
    @Field(() => Number)
    generation: number
    @Field(() => String)
    status: string
    @Field(() => String)
    species: string
    @Field(() => String)
    type_1: string
    @Field(() => String)
    type_2: string
    @Field(() => Number)
    height_m: number
    @Field(() => Number)
    weight_kg: number
    @Field(() => String)
    ability_1: string
    @Field(() => String)
    ability_2: string
    @Field(() => String)
    ability_hidden: string
    @Field(() => Number)
    hp: number
    @Field(() => Number)
    attack: number
    @Field(() => Number)
    defense: number
    @Field(() => Number)
    sp_attack: number
    @Field(() => Number)
    sp_defense: number
    @Field(() => Number)
    speed: number

}