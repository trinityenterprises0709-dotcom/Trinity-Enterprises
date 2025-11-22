import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-structure-fabrication-service',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './structure-fabrication-service.component.html',
  styleUrls: ['./structure-fabrication-service.component.css']
})

export class StructureFabricationServiceComponent {
}
