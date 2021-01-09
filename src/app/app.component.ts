import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SearchPipe} from './pipes/search/search.pipe';
import {UsersService} from './users/users.service';
import {debounceTime} from 'rxjs/operators';

export interface Users {
  name: string;
  img: string;
  title?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  search = new FormControl('', Validators.pattern('[a-zA-Z0-9]*'));
  users: Users[];
  userList: Users[];
  found: number;
  performance: string;

  constructor(
    private searchPipe: SearchPipe,
    private usersService: UsersService
  ) {
    this.userList = this.usersService.generateUsers(1000000);
  }
  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(250)
    ).subscribe((value: string) => {
      const start = +new Date();
      this.users = (this.searchPipe.transform(this.userList, 'name,title', value));

      this.performance = +new Date() - start + 'ms';
    });

    this.search.setValue('');
  }



}
