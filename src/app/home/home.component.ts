import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data : any[]= [];
  private subscription: Subscription = new Subscription();


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllEntries();
  }

  getAllEntries() {
    this.apiService.getAllEntries().subscribe(
      (response: any) => {
        this.data = response;
        // console.log(response)
      },
      (error) => {
        console.error('Error fetching entries:', error);
      }
    );

  }
  // creatr function de regroupement par calendrier

  createCalender(){


  }


}
