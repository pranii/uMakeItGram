import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionTypes, isActionDecision, isActionPopup, isActionText, lifeMaxBarValue, lifeStartValue, path_fashion } from '../model/text';

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
  barStyle = {
    width: this.maxBarValue/this.barValue + '%'
  }

  
  constructor() {
    this.source = setInterval(() => {this.showText =  this.currentAction!.text.slice(0,this.textStep); this.textStep++}, 5);
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
      this.barStyle.width = this.maxBarValue/this.barValue + '%';
      this.nextAction(this.currentAction!.decision[id].nextStep)

    }
  }

  nextAction(id: number) {
    this.currentStep = id;
    this.currentAction = path_fashion.get(id);

    if(isActionText(this.currentAction!)) {
      this.textStep = 0;
    }
    else if(isActionPopup(this.currentAction!)) {
      this.showPopup = true;
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
