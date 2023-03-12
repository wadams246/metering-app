import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'metering-app';

  submeters = [
    {
      id: 1,
      name: 'Submeter 0',
      enabled: true,
      channels: [
        { id: 1, enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ]
    },
    {
      id: 1,
      name: 'Submeter 1',
      enabled: true,
      channels: [
        { id: 1, enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ]
    },
    {
      id: 1,
      name: 'Submeter 2',
      enabled: true,
      channels: [
        { id: 1, enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ]
    },
    {
      id: 1,
      name: 'Submeter 3',
      enabled: true,
      channels: [
        { id: 1, enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ]
    },
    {
      id: 1,
      name: 'Submeter 4',
      enabled: false,
      channels: [
        { id: 1, enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ]
    },
  ]
}
