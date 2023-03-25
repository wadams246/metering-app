import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submeter-details-card',
  templateUrl: './submeter-details-card.component.html',
  styleUrls: ['./submeter-details-card.component.less']
})
export class SubmeterDetailsCardComponent {
  @Input() submeter: any = {};


  ngOnChanges() {
  }
  
  toggleSubmeter(state: boolean) {
    console.log('toggle submeter: ', state);
  }

  toggleChannel(index: number) {
    this.submeter.channels[index].enabled = !this.submeter.channels[index].enabled;
  }
}
