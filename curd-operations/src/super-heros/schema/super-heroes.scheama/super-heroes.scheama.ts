import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type SuperHeroDocument = SuperHeroes & Document

@Schema({collection:'super_heroes'})
export class SuperHeroes {

    @Prop()
    name:string

    @Prop()
    power:string

    @Prop()
    franchies:string

    @Prop()
    imageUrl:string
}

export const SuperHeroesScheama = SchemaFactory.createForClass(SuperHeroes)