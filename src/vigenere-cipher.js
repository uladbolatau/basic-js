const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  startCode = "A".charCodeAt(0);
  endCode = "Z".charCodeAt(0);
  deltaCode = this.endCode - this.startCode + 1;
  msg = "";
  key = "";

  constructor (machineType = true) {
    this.direct = machineType;
  }

  _init(message, keyword) {
    try {
      this.msg = message.toUpperCase();
      this.key = keyword.toUpperCase();
    } catch (error) {
      throw new Error(error);
    }
  }
  
  encrypt(message, keyword) {
    this._init(message, keyword);
    return this._process(this._crypt(true));
  }

  decrypt(message, keyword) {
    this._init(message, keyword);
    return this._process(this._crypt(false));
  }

  _crypt(crytpType) {
    let keyStep = 0;
    let keyLength = this.key.length;

    return this.msg.split("").reduce((crypted, letter) => {
      let letterCode = letter.charCodeAt(0);

      if (letterCode < this.startCode || letterCode > this.endCode) {
        return crypted + letter;
      }

      if (crytpType) {
        // encrypt
        var ryptedCode = this.startCode + (letterCode + this.key.charCodeAt(keyStep++ % keyLength)) % this.deltaCode;
      } else {
        // decrypt
        var ryptedCode = this.startCode + (letterCode + this.deltaCode - this.key.charCodeAt(keyStep++ % keyLength)) % this.deltaCode;
      }
      return crypted + String.fromCharCode(ryptedCode);
    }, '');
  }
  
  _process(value) {
    return (this.direct ? value : value.split("").reverse().join(""));
  }
}

module.exports = VigenereCipheringMachine;
