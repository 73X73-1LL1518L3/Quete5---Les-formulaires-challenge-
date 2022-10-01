import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  userModel: User = new User("", "", "", "")
  submitted: SubmitEvent = new SubmitEvent("")

  constructor() { }

  ngOnInit(): void {
  }



  onSubmit(): void {
    //Le formulaire envoyé 
    console.log(this.userModel);
  }


}
