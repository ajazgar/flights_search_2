import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "./shared/modal/modal.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  isOneWay: boolean;
  isTwoWays: boolean;
  isMultiCity: boolean;

  @ViewChild(ModalComponent) myModal: ModalComponent;

  constructor() {
    setTimeout(() => {
    }, 3000);
  }

  ngOnInit() {
  }

  blabla() {

  }

}
