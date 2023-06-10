import { Component, Input } from '@angular/core';
import { COLORS } from '@models/color.model';

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input() color: 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray' = 'sky'

  mapColors = COLORS

  get colors(){
    // lo llamamos clases ya que al usar un atributo del objeto son 3 clases q le estamos aplicando
    const classes = this.mapColors[this.color]
    if(classes){
      return classes
    }else{return {}}
  }

}
