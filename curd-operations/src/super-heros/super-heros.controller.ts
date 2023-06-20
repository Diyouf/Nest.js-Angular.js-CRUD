import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { SuperHeroes } from './schema/super-heroes.scheama/super-heroes.scheama';

@Controller('super-heros')
export class SuperHerosController {
    constructor(private superHeroService : SuperHerosService){}

    @Get()
    async fetchAll(){
        return this.superHeroService.fetchAll();
    }

    @Post()
    async createSuperHero(@Body() superHeroes:SuperHeroes){
        return this.superHeroService.create(superHeroes)
    }

    @Get('/:id')
    async getById(@Param('id') id:string){
        return this.superHeroService.getById(id)
    }

    @Put('/:id')
    async updateSuperHero(@Param('id') id:string,@Body() SuperHeroes:SuperHeroes) {
        return await this.superHeroService.Update(id,SuperHeroes)
    }

    @Delete('/:id')
    async delete(@Param('id') id:string){
        return this.superHeroService.delete(id)
    }

}
