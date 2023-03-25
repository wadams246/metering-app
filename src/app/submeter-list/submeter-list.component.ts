import { Component } from '@angular/core';

@Component({
  selector: 'app-submeter-list',
  templateUrl: './submeter-list.component.html',
  styleUrls: ['./submeter-list.component.less']
})
export class SubmeterListComponent {
  submeters = [
    {
      id: '1234567890abcdefg',
      name: 'Submeter 0',
      enabled: true,
      channels: [
        { id: '1234567890abcdefg', enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ],
      details: [
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' }
      ]
    },
    {
      id: '1234567890abcdefg',
      name: 'Submeter 1',
      enabled: true,
      channels: [
        { id: '1234567890abcdefg', enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ],
      details: [
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' }
      ]
    },
    {
      id: '1234567890abcdefg',
      name: 'Submeter 2',
      enabled: true,
      channels: [
        { id: '1234567890abcdefg', enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ],
      details: [
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' }
      ]
    },
    {
      id: '1234567890abcdefg',
      name: 'Submeter 3',
      enabled: true,
      channels: [
        { id: '1234567890abcdefg', enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ],
      details: [
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' }
      ]
    },
    {
      id: '1234567890abcdefg',
      name: 'Submeter 4',
      enabled: false,
      channels: [
        { id: '1234567890abcdefg', enabled: true },
        { id: 2, enabled: false },
        { id: 3, enabled: false },
        { id: 4, enabled: true }
      ],
      details: [
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' },
        { voltage: '240W', current: '13A' }
      ]
    },
  ];
}
