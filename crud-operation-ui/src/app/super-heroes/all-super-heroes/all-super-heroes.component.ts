import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';


declare var window:any

@Component({
  selector: 'app-all-super-heroes',
  templateUrl: './all-super-heroes.component.html',
  styleUrls: ['./all-super-heroes.component.css']
})
export class AllSuperHeroesComponent implements OnInit{
   
  constructor(private superHeroServiece:SuperHeroesService ){}

  superHeroes:SuperHeroes[] = [];
  deleteModal:any
  itemToDelete :string = ''

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    )
    this.getAll()
  }

  openDeletePopUp(id:string){
    this.itemToDelete = id
    this.deleteModal.show()
  }
  getAll(){
    this.superHeroServiece.get().subscribe((data)=>{
      this.superHeroes = data
    })
  }

  delete(){
    this.superHeroServiece.delete(this.itemToDelete).subscribe(()=>{
      this.superHeroes = this.superHeroes.filter(_=>_._id !== this.itemToDelete)
      this.deleteModal.hide()
    })
  }

}
