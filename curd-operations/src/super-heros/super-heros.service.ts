import { Injectable } from '@nestjs/common';
import { SuperHeroDocument, SuperHeroes } from './schema/super-heroes.scheama/super-heroes.scheama';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable()
export class SuperHerosService {
    constructor(@InjectModel(SuperHeroes.name) private superHeroModel: Model<SuperHeroDocument>) { }


    async fetchAll(): Promise<SuperHeroes[]> {
        return this.superHeroModel.find().exec()
    }

    async create(superHeroes: SuperHeroes) {
        const newSuperHero = new this.superHeroModel(superHeroes)
        return newSuperHero.save()
    }

    async getById(id: any) {
        return this.superHeroModel.findById(id).exec()
    }

    async Update(id: any, superHero: SuperHeroes) {
        return await this.superHeroModel.findByIdAndUpdate(id, superHero, { new: true })
    }

    async delete(id:string){
        return this.superHeroModel.findByIdAndDelete(id)
    }
    

}



