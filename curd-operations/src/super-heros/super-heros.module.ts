import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperHeroes, SuperHeroesScheama } from './schema/super-heroes.scheama/super-heroes.scheama';
import { SuperHerosService } from './super-heros.service';
import { SuperHerosController } from './super-heros.controller';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:SuperHeroes.name,
                schema:SuperHeroesScheama,
                collection:'super_heroes'
            }
        ])
    ],
    providers: [SuperHerosService],
    controllers: [SuperHerosController]
})
export class SuperHerosModule {}
