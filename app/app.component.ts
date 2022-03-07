import { Component } from '@angular/core';
import { Movie } from './movie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pratica-aula07';
  Movie = [
    { title: 'Os vingadores', rating: 8 },
    { title: 'o jonas', rating: 10 },
    { title: 'Parasita', rating: 5 },
    { title: 'Pantera negra', rating: 8},
    { title: 'Joias Brutas', rating: 4 }
  ];
}


