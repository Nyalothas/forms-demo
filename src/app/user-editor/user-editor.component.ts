import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-user-editor',
	templateUrl: './user-editor.component.html',
	styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

	name = new FormControl();

	/*   profileForm = new FormGroup({
			firstName: new FormControl(''),
			lastName: new FormControl(''),
			pinCode: new FormControl()
		}); */

	profileForm = this.fb.group({
		firstName: ['', this.firstLetterCapsValidator],
		lastName: [''],
		pinCode: [, Validators.minLength(3)]
	})

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
	}

	onUpdateName() {
		this.name.setValue('Panda');
	}

	onSubmit() {
		console.log(this.profileForm.value);
	}

	onUpdateProfile() {
		this.profileForm.patchValue({
			firstName: 'Mini',
			lastName: 'Rx',
			pinCode: 717
		})
	}

	isControlValid(controlName: string, validators: string | string[]) {
		let control = this.profileForm.get(controlName);

		if (control.errors === null) {
			return true;
		}

		let aValidators = typeof validators === 'string' ? [validators] : validators;

		const isValid = v => { return v === false; }

		return aValidators.some(isValid);
	}

	firstLetterCapsValidator(c: FormControl) {
		let value: string = c.value;

		if (!value) {
			return null;
		}

		let firstChar: string = value[0];

		if (firstChar !== firstChar.toUpperCase()) {
			return { firstLetterCaps: false }
		}

		return null;
	}

}
