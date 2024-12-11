import { Component } from '@angular/core';
import { ListaPokemon } from './listapokemon.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  o!: Observable<ListaPokemon>;
  title = 'pappardelle';
  mialista!: ListaPokemon;


  constructor(public http: HttpClient) {
    this.o = this.http.get<ListaPokemon>("https://pokeapi.co/api/v2/type");
    this.o.subscribe(this.getData);

  }
  getData = (getData: ListaPokemon) => {
    this.mialista = getData;
  }



}
