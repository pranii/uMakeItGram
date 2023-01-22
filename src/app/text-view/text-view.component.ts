import { Component, OnInit } from '@angular/core';
import { ActionTypes, badEndingValue, debugModus, ending_src, isActionDecision, isActionPopup, isActionText, lifeMaxBarValue, lifeStartValue, path_fashion, textSpeed } from '../model/text';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss']
})
export class TextViewComponent implements OnInit {
  showText: string = "";
  currentStep: number = 0;
  textStep: number = 0;
  source;
  currentAction?: ActionTypes = path_fashion.get(0);
  barValue: number = lifeStartValue;
  maxBarValue: number = lifeMaxBarValue;
  showPopup: boolean = false;
  showEnding: boolean = false;
  endingPic: string = "";
  textDebugModus = debugModus;
  currentEndingImgSrc = "";

  barStyle = {
    width: (this.maxBarValue/100)*this.barValue + '%'
  }

  
  constructor() {
    this.source = setInterval(() => {this.showText =  this.currentAction!.text.slice(0,this.textStep); this.textStep++}, textSpeed);
  }

  ngOnInit(): void {
  }

  nextStep() {
    if(isActionText(this.currentAction!) || isActionPopup(this.currentAction!)) {
      this.nextAction(this.currentAction.nextStep)
    }
  }

  decide(id: number) {
    if(isActionDecision(this.currentAction!)) {
      this.barValue += this.currentAction.decision[id].barValue;
      this.barStyle.width = (this.maxBarValue/100)*this.barValue + '%';
      this.nextAction(this.currentAction!.decision[id].nextStep)

    }
  }

  nextAction(id: number) {
    this.currentStep = id;

    if(this.currentStep === 1000) {
      this.showEnding = true;
      if(this.barValue >= badEndingValue)
        this.endingPic = ending_src[1];
      else 
        this.endingPic = ending_src[0];
    } else if(this.currentStep === 1001) {
      this.endingPic = ending_src[2];
    } else {
      this.currentAction = path_fashion.get(id);

      if(isActionText(this.currentAction!)) {
        this.textStep = 0;
      }
      else if(isActionPopup(this.currentAction!)) {
        this.showPopup = true;
      }
    }
  }

  isActionDecision() {
    return isActionDecision(this.currentAction!);
  }

  finishText() {
    this.textStep = this.currentAction!.text.length;
    this.showText = this.currentAction!.text;
    
  }

}
