import { Component, OnInit, Output, EventEmitter } from '@angular/core'; //Quando se trata de evento, precisamos do EventEmitter, quando são dados é apenas Output!

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.changeNumber.emit() //emitindo
    //console.log('mudou o número');
  }

}
