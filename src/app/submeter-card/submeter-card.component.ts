import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submeter-card',
  templateUrl: './submeter-card.component.html',
  styleUrls: ['./submeter-card.component.less']
})
export class SubmeterCardComponent {
  @Input() submeter: any = {};
  @Input() channels: any[] = [];


  ngOnChanges() {
    this.channels = this.submeter.channels;
  }

  toggleChannel(index: number) {
    this.channels[index].enabled = !this.channels[index].enabled;
  }

  toggleSubmeter(state: boolean) {
    console.log('toggle submeter: ', state);
  }

  disableSubmeter() {
    console.log('disabled subnmeter');
  }
}
