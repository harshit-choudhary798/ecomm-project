import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators  } from '@angular/forms';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });


  get name() { return this.form.get('name'); }
  get password() { return this.form.get('password'); }
  get email() { return this.form.get('email'); }


  onSubmit() {
    console.log(this.form.value);
  }

  constructor() { }
 
  ngOnInit(): void {
  }

}
