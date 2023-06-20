import { Component, OnInit } from '@angular/core';
import { CreateOrUpdate } from '../create-or-update';
import { SuperHeroesService } from '../super-heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-super-heroes',
  templateUrl: './add-super-heroes.component.html',
  styleUrls: ['./add-super-heroes.component.css']
})
export class AddSuperHeroesComponent implements OnInit {

  constructor(private superHeroService : SuperHeroesService,private Router:Router){}

  ngOnInit(): void {

  }
  superHeroes : CreateOrUpdate = {
    name: '',
    power: '',
    franchies: '',
    imageUrl: ''
  }
  create(){
    this.superHeroService.create(this.superHeroes).subscribe(()=>{
      this.Router.navigate(['/'])
    })
  }
}

