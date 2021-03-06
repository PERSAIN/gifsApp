import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';

@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadosComponent,
    GifsPageComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
