import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-user-item',
  templateUrl: './list-user-item.component.html',
  styleUrls: ['./list-user-item.component.css']
})
export class ListUserItemComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  firstname: string;
  @Input()
  id: number;
  constructor() { }

  ngOnInit() {
  }

}
