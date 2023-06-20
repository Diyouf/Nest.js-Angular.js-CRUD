import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHeroesService } from '../super-heroes.service';
import { CreateOrUpdate } from '../create-or-update';

@Component({
  selector: 'app-edit-super-heroes',
  templateUrl: './edit-super-heroes.component.html',
  styleUrls: ['./edit-super-heroes.component.css']
})
export class EditSuperHeroesComponent implements OnInit{

  constructor(private route:ActivatedRoute,private superHero:SuperHeroesService ,private router:Router){}

  itemId:string = ''

  ngOnInit(): void {
      this.route.paramMap.subscribe((param)=>{
        this.itemId =  param.get('id') ?? ''
      })
     this.getbyId()
  }

  superHeroes : CreateOrUpdate = {
    name: '',
    power: '',
    franchies: '',
    imageUrl: ''
  }

  getbyId (){
    this.superHero.getById(this.itemId).subscribe((data)=>{
      this.superHeroes.franchies = data.franchies
      this.superHeroes.power = data.power
      this.superHeroes.name = data.name
      this.superHeroes.imageUrl = data.imageUrl
    })
  }

  create(){
    this.superHero.update(this.itemId,this.superHeroes).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }

}
