import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [
    FormsModule
  ],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  // name: string = '';
  person = {
    name: 'Juan',
    adress: 'Maryland',
    fatherName: '',
    motherName: '',
  }

}
