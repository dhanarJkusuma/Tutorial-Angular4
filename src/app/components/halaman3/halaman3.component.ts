import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.component.html',
  styleUrls: ['./halaman3.component.css']
})
export class Halaman3Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFirstHalaman(){
    this.router.navigate(['/halaman1']);
  }

}
