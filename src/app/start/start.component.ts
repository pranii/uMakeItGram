import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  showText: string = "";
  text: string = "  Hallo Clara! Ich habe gehört, dass du dein Abitur dieses Jahr geschafft hast. Glückwunsch dazu! Hast du dir schon Gedanken gemacht, wie es jetzt weiter geht?";
  textStep: number = 0;

  source;

  constructor(private router: Router) {
    this.source = setInterval(() => {this.showText =  this.text.slice(0,this.textStep); this.textStep++}, 20);
   }

  ngOnInit(): void {
  }

  forwardToPath() {
    this.router.navigate(['/path'])
  }
}
