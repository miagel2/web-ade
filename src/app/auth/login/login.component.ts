import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title_login= 'Connectez au portail planning';

  constructor() { }

  ngOnInit(): void {
  }

}
