import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {

  @Input() title : string;

  @Input() linktarget : string;

  @Input() description : string;

  @Input() myimg : string = "../../assets/FionaFace.jpg";

  constructor() { }

  ngOnInit() {
  }

}
