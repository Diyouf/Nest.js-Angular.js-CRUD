import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SuperHeroes } from './super-heroes';
import { CreateOrUpdate } from './create-or-update';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<SuperHeroes[]>('http://localhost:3000/super-heros')
  }

  create(superHero:CreateOrUpdate){
    return this.http.post('http://localhost:3000/super-heros',superHero)
  }

  getById(id:string){
    return this.http.get<SuperHeroes>(`http://localhost:3000/super-heros/${id}`)

  }

  update(id:string,superhero:CreateOrUpdate){
    return this.http.put(`http://localhost:3000/super-heros/${id}`,superhero)
  }

  delete(id:string):any{
    return this.http.delete(`http://localhost:3000/super-heros/${id}`)
  }
}
