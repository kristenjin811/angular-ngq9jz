import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataItem } from './data-item';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() selectedColor: string = ""; // This will now come from parent
  @Input() data: DataItem[] = []
  @Output() colorChange = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit() {
  }
  

  changeBorderColor(color: string) {
    this.colorChange.emit(color)
    console.log(this.colorChange)
  }

}