import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halaman1',
  templateUrl: './halaman1.component.html',
  styleUrls: ['./halaman1.component.css']
})
export class Halaman1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  onNextHalaman(){
    this.router.navigate(['/halaman2']);
  }

}
