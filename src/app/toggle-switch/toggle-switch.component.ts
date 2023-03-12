import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.less']
})
export class ToggleSwitchComponent implements OnInit {
  @Input() value = false;

  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  changeSwitch(value: boolean) {
    this.onChange.emit(value);
  }
}
