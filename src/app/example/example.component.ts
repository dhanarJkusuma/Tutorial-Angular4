import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input() 
  nilai : string

  @Output() 
  reset : EventEmitter<string> = new EventEmitter<string>();

  constructor() { 

  }

  ngOnInit() {
    
  }
  
  onReset(){
    this.reset.emit("hello emit");
  }

}
