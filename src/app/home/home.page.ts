import { Component } from '@angular/core';
import { CipherService } from '../service/cipher.service';

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

  constructor(private cipherService: CipherService) {}

  changeMode() {
    this.isEncryptionModeEnabled = this.modeSelected === 'encrypt';
      
    if (this.isEncryptionModeEnabled) {
      this.outputTitle = "Your Encrypted Message:";
    } else {
      this.outputTitle = "Your Decrypted Message:";
    }

    this.inputTextChange();
  }

  inputTextChange() {
    if (this.isEncryptionModeEnabled) {
      this.outputText = this.cipherService.encode(this.inputText, this.keyText);
    } else {
      this.outputText = this.cipherService.decode(this.inputText, this.keyText);
    }
  }
}
