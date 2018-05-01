import { Component } from '@angular/core';

// import {Component} from '@angular/core';

/**
 * @title Multi-row toolbar
 */
// @Component({
//   selector: 'toolbar-multirow-example',
//   templateUrl: 'toolbar-multirow-example.html',
//   styleUrls: ['toolbar-multirow-example.css'],
// })
// export class ToolbarMultirowExample {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  isShowMsg = false;

  answer: String = '';
  displayAnswer: String = '';
  showSpinner = false;

  correctAnswer: String = 'I am, mo-fo.';
  flagAnswered = false;

  showMsg() {
    this.isShowMsg = true;
  }

  showAnswer() {
    this.showSpinner = true;
    this.displayAnswer = '';
    this.flagAnswered = false;

    setTimeout( () => {
        this.displayAnswer = this.answer;
        this.showSpinner = false;
        this.flagAnswered = true;
      }, 2000
    );
  }

  helpAnswer() {
    this.answer = this.correctAnswer;
  }

}
