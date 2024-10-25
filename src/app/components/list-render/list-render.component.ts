import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent implements OnInit {

  animals: Animal[] = []; //dados no db.json

  animalDetails = ''

  constructor(private listService: ListService) { 
    this.getAnimals();
  } //Criando um novo serviço ListService

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)!`
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name); //remove apenas do front-end
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
