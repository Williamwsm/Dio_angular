import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  constructor(){}
  @Input()
  photoCover:string =""
  @Input()
  cardTitle : string =""
  @Input()
  cardDescription:string=""
  @Input()
  id:string="0"
  ngOnInit(): void {

  }

}
