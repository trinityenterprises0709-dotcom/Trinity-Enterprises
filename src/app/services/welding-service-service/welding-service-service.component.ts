import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-welding-service-service',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './welding-service-service.component.html',
  styleUrls: ['./welding-service-service.component.css']
})
export class WeldingServiceServiceComponent  {
}
