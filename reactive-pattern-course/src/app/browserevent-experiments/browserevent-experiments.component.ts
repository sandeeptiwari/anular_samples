import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browserevent-experiments',
  templateUrl: './browserevent-experiments.component.html',
  styleUrls: ['./browserevent-experiments.component.css']
})
export class BrowsereventExperimentsComponent implements OnInit {
  hoverSection : HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    // this.hoverSection.addEventListener('mousemove', ev => {
    //   console.log("Mouse Move");
    // });
    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  unsubscribe(){
    console.log("unsubscribed called");
    this.hoverSection.removeEventListener('mousemove', onMouseMove);//for unsubscribing event
  }

}

function onMouseMove(ev: MouseEvent){
  console.log("Event "+ev);
}
