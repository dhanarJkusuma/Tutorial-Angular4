import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNextHalaman(){
    this.router.navigate(['/halaman3']);
  }

}
