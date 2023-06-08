import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input() color: 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray' = 'sky'

  mapColors = {
    sky: {'bg-sky-700': true,
          'hover: bg-sky-800': true,
          'text-white': true}
  ,
  green: {'bg-sky-700': true,
          'hover: bg-sky-800': true,
          'text-white': true}
  ,
  red: {'bg-sky-700': true,
          'hover: bg-sky-800': true,
          'text-white': true}
  ,
  violet: {'bg-sky-700': true,
          'hover: bg-sky-800': true,
          'text-white': true}
  }

  get colors(){
    const classes = this.mapColors[this.color]
    return classes ? classes : {}
  }

}
