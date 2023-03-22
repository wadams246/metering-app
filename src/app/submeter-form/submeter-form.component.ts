import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submeter-form',
  templateUrl: './submeter-form.component.html',
  styleUrls: ['./submeter-form.component.less']
})
export class SubmeterFormComponent {
  placeholder = 'Please enter PanelCode';
  editFieldStatus: any = {};
  valuesEntered = false;
  tempValue = '';
  device:any = {
    mainDeviceId: '',
    panelCode: '',
    powerMeterIP: ''
  };
  
  submeterForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  get currentValue() {
    return this.submeterForm.get('currentValue')?.value || '';
  }

  ngOnInit() {
    this.buildForm();
  }

  enterValue() {
    this.device.panelCode = this.device.panelCode || this.currentValue;
    this.device.powerMeterIP = this.device.powerMeterIP || this.currentValue;
  }

  editValue(field: string) {
    this.resetEditStatus();
    this.submeterForm.get('currentValue')?.patchValue(this.device[field])

    this.editFieldStatus[field] = true;
  }

  cancelEdit(field: string) {
    this.resetEditStatus();
  }

  private resetEditStatus() {
    this.editFieldStatus = {
      panelCode: false,
      powerMeterIP: false
    };
  }

  private buildForm() {
    this.submeterForm = this.fb.group({
      currentValue: ''
    });
  }
}
