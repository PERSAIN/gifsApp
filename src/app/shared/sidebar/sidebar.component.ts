import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private GifsService : GifsService) { }

  ngOnInit(): void {
  }

  buscar( termino : string){
    this.GifsService.buscarGifs(termino);
  }

  get historial(){
    return this.GifsService.historial;
  }

}
