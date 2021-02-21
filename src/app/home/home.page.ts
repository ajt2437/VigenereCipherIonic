import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isEncryptionModeEnabled = true
  outputTitle = "Your Encrypted Message:"
  modeSelected = "encrypt";
  inputText = "";
  keyText = "";
  outputText = "";

  constructor() {}

  changeMode() {
    this.isEncryptionModeEnabled = this.modeSelected === 'encrypt'
      
    if (this.isEncryptionModeEnabled) {
      this.outputTitle = "Your Encrypted Message:"
    } else {
      this.outputTitle = "Your Decrypted Message:"
    }
  }

  inputTextChange() {
    this.outputText = this.inputText + " " + this.keyText 
  }

}
