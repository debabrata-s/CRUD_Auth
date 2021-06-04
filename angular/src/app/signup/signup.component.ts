import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as ep from '../config/endpoint.json'
import { UserType } from '../models/usertype.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userTypes: UserType[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  getUserTypes() {
    this.api.get(ep.getUserTypes).subscribe(res => {
      this.userTypes = res['data'];
    })
  }
  addUser() {
    let payload = {

    }
    this.api.post(ep.addUser, payload).subscribe(res => {

    })
  }


}
