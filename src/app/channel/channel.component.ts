import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.less']
})
export class ChannelComponent {
  @Input() channelNumber = 0;
  @Input() enabled = true;
  @Input() vertical = false;

  @Output() onToggleChange: EventEmitter<number> = new EventEmitter<number>();

  toggleChannel() {
    this.onToggleChange.emit(this.channelNumber);
  }
}
