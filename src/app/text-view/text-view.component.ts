import { Component, OnInit } from '@angular/core';
import { TextService } from '../service/text.service';
import { Action, ActionDecision, ActionText, isActionDecision, isActionText, path_fashion } from '../model/text';

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
  currentAction?: ActionText | ActionDecision = path_fashion.get(0);
  barValue: number = 100;
  showPopup: boolean = false;
  
  constructor(private textService: TextService) {
    this.source = setInterval(() => {this.showText =  this.currentAction!.text.slice(0,this.textStep); this.textStep++}, 50);
   }

  ngOnInit(): void {
  }

  nextStep() {
    if(isActionText(this.currentAction!)) {
      this.currentAction = path_fashion.get(this.currentAction!.nextStep);

      if(isActionText(this.currentAction!))
        this.textStep = 0;
    }
  }

  decide(id: number) {
    if(isActionDecision(this.currentAction!)) {
      this.barValue += this.currentAction.decision[id].barValue;
      this.currentAction = path_fashion.get(this.currentAction!.decision[id].nextStep);

      if(isActionText(this.currentAction!))
        this.textStep = 0;

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
