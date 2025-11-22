import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-engineering-design-service',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './engineering-design-service.component.html',
  styleUrls: ['./engineering-design-service.component.css']
})

export class EngineeringDesignServiceComponent {
}
