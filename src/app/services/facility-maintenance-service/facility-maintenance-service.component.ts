import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-facility-maintenance-service',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './facility-maintenance-service.component.html',
  styleUrls: ['./facility-maintenance-service.component.css']
})

export class FacilityMaintenanceServiceComponent {
}
