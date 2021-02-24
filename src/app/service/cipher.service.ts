import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CipherService {

  alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "\'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];

  constructor() { }

  private convertToArray(input: string) {
    return input.toUpperCase().split("");
  }

  private getAdjustedKeyArray(item) {
    let itemIndex = this.alphabetArray.indexOf(item)
    let beforeIndexArray = this.alphabetArray.slice(0, itemIndex);
    let afterIndexArray = this.alphabetArray.slice(itemIndex)

    return afterIndexArray.concat(beforeIndexArray);
  }

  private getKeyAdjustedArrays(keyArray: string[]) {
    var adjustedArrays = [];

    keyArray.forEach(element => {
      adjustedArrays.push(this.getAdjustedKeyArray(element));
    });

    return adjustedArrays;
  }

  encode(input, key) {
    let inputArray = this.convertToArray(input);
    let keyArray = this.convertToArray(key);
    let keyArrays = this.getKeyAdjustedArrays(keyArray);

    let outputArray = inputArray.map((item, index, _) => {
      let currentIndex = (index % keyArray.length);
      let currentKeyArray = keyArrays[currentIndex];
      let alphabetIndex = this.alphabetArray.indexOf(item);
      
      return currentKeyArray[alphabetIndex];
    });

    return outputArray.reduce((acc, current) => {
      return acc + current;
    });
  }

  decode(input, key) {
    let inputArray = this.convertToArray(input);
    let keyArray = this.convertToArray(key);
    let keyArrays = this.getKeyAdjustedArrays(keyArray);

    let outputArray = inputArray.map((item, index, _) => {
      let currentIndex = (index % keyArray.length);
      let currentKeyArray = keyArrays[currentIndex];
      let encryptedIndex = currentKeyArray.indexOf(item);
      
      return this.alphabetArray[encryptedIndex];
    });

    return outputArray.reduce((acc, current) => {
      return acc + current;
    }).toLowerCase();
  }
}
