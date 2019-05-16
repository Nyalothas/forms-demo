import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  name = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Panda');
  }

}
