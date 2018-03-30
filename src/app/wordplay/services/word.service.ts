import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

const config = require('../../config').Config;

@Injectable()
export class WordService {

  private authHttp;
  constructor() {
    this.authHttp = new AuthHttp();
  }

  getWord(word: string) {
    return this.authHttp.post(config.backEndUrl + 'dict', {word: word})
      .map((resp: Response) => resp.json());
  }

}
