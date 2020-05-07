import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Screen984770Service } from './screen984770.service';



@Component({
  selector: 'app-screen984770',
  templateUrl: './screen984770.component.html',
  styleUrls: ['./screen984770.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Screen984770Component implements OnInit {

  constructor(
private screen984770Service: Screen984770Service
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.screen984770Service.GpCreate(this.testentity)
  .subscribe(
    data => {
       console.log('data created successfully');
    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}