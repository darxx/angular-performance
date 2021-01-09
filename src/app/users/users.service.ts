import { Injectable } from '@angular/core';
import userNames from '../all-users.json';
import {Users} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public generateUsers = (count: number): Users[] => {
    const userNameCount = userNames.length;
    return [...new Array(count)].map(() => {
      return {
        name: userNames[this.getRandomInt(0, userNameCount)],
        title: this.getRandomInt(0, 10) > 5 ? 'GDE' : 'Developer',
        img: `/assets/${this.getRandomInt(1, 10)}.gif`
      };
    });
  }
  private getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
