import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { textSpeed } from '../model/text';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  showText: string = "";
  textStep: number = 0;
  showButton = false;
  source;
  arrayStep: number = 0;
  textSpeed: number = 15;
  texts: string[] = [
    "ELIZA:",
    "Hallo Clara!",
     "Ich habe gehört, dass du dein Abitur dieses Jahr geschafft hast. Glückwunsch!",
     "Hast du dir schon Gedanken gemacht, wie es jetzt weiter geht?",
    "CLARA:",
    "Hi Eliza.",
    "Ja, … Nein, … Ach.. Ich weiß nicht so recht.",
    "Ich wollte eigentlich ins Ausland für ein paar Monate.",
    "Das klappt jetzt aber leider nicht.",
    "Ich überlege, ob ich vielleicht studieren will aber da weiß ich auch nicht so genau..",
    "Ich bin momentan ein bisschen überfordert. Können wir nicht über etwas anderes sprechen?",
    "ELIZA:",
    "Aber Clara. Du musst doch an deine Zukunft denken.", 
    " Und überhaupt, wie willst du dir einen Auslandsaufenthalt leisten?", 
    "Deine Eltern kommen gerade so über die Runden und von Ferienjobs hälst du nicht viel.",
    "...",
    "Wie wäre es denn, wenn du von Zuhause aus Geld verdienen könntest, bis du deinen Weg findest?",
    "CLARA:",
    "Wie hast du dir das vorgestellt?",
    "ELIZA",
    "Über soziale Medien.",
    "CLARA:",
    "Du meinst doch nicht etwa auf uMakeItGram?",
    "ELIZA",
    "Hahaha, doch doch. Genau das meine ich.",
    "CLARA:",
    "Aber… wie denn? Ich habe es ja nicht mal geschafft, in der Schule irgendwie an Beliebtheit zu gewinnen. Wie soll ich das jetzt im Internet schaffen? Außerdem… Schau mich doch an.. Warum sollte man mir folgen?",
    "ELIZA",
    "Vertrau mir.",
    "CLARA:",
    "Ich weiß nicht.",
    "ELIZA",
    "Vertrau mir.",
    "CLARA:",
    "…",
    "ELIZA",
    "Mach dir keine Sorgen. Lass es uns doch erstmal versuchen, danach kannst du dich immer noch dagegen entscheiden.",
    "CLARA:",
    "… aber dann anonym.",
    "ELIZA",
    "Nein, vertrau mir.",
    "CLARA:",
    "Ich weiß es nicht.",
    "ELIZA",
    "Machen wir einen Deal. Ich stelle dir einen UMac zur Verfügung, wir machen zunächst gemeinsam Content und solltest du in einem halben Jahr nicht mindestens 10.000EUR im Monat verdienen, lasse ich dich damit in Ruhe.",
    "CLARA:",
    "In einem halben Jahr 10.000 EUR im Monat. Du spinnst wohl.",
    "ELIZA",
    "Lass mich erstmal dein Profil bearbeiten, ich habe da viel Expertise. Wenn du morgen aufwachst wirst du sehen, was für einen Impact das haben kann.",
    "CLARA:",
    "…okay…",
    "...",
    "...",
    "ELIZA",
    "Wow… ich habe tatsächlich fast dreitausend neue Follower.",
    "CLARA:",
    "Ich habs dir doch gesagt! Dein uMac steht auch schon bereit. Gefällt er dir?"
  ];

  text: string = this.texts[this.arrayStep];
  picPath: string = "../../" + environment.assetUrl + "/start.jpg";

  constructor(private router: Router) {
    this.source = setInterval(() => {this.showText =  this.text.slice(0,this.textStep); this.textStep++}, this.textSpeed);
   }

  ngOnInit(): void {
  }

  forwardToPath() {
    this.arrayStep++;

    if(this.texts.length > this.arrayStep) {
      this.text = this.texts[this.arrayStep];
      this.textStep = 0;
    } else if(this.texts.length == this.arrayStep) {
      this.showButton = true;
    } else {
      this.router.navigate(['/path'])
    }
  }
}
