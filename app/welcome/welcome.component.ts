import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css',]
})
export class WelcomeComponent implements OnInit {
       title:string = 'Mythri store';
       ongo(){
           this.router.navigate(['./Login']);
           alert('hiii');
       }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
