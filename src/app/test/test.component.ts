import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  controlsFormGroup: FormGroup;
  radioExemple: FormControl = new FormControl ('milk');
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.controlsFormGroup = this.fb.group({
      radioExemple: this.radioExemple
    })

    this.controlsFormGroup.get('radioExemple').valueChanges.subscribe(value =>
       console.log(value));

  }

  save(): void {
    let radioValue = this.controlsFormGroup.get('radioExemple').value;
    console.log(radioValue);
  }
}
