import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SearchPipe} from '../../pipes/search/search.pipe';
import {Users, UsersService} from '../../users/users.service';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  model: {
    search: FormControl,
    isCacheEnabled: FormControl,
    isSearching: boolean,
    performance: string,
    activeSearchText: string,
    cache: any,
    userCount: number,
    users: Users[];
  } = {
    search: new FormControl('', Validators.pattern('[a-zA-Z0-9]*')),
    isCacheEnabled: new FormControl(true),
    performance: '',
    isSearching: false,
    activeSearchText: '',
    cache: {},
    userCount: 1000000,
    users: []
  };
  userList: Users[];
  activeTimeout;
  constructor(
    private searchPipe: SearchPipe,
    private usersService: UsersService
  ) {
    this.userList = this.usersService.generateUsers(this.model.userCount);
    this.model.isCacheEnabled.valueChanges.subscribe(this.cacheControl);
    this.model.search.valueChanges.subscribe(this.onSearch);
  }

  public onSearch = (search: string) => {
    clearTimeout(this.activeTimeout);
    this.model.isSearching = true;
    this.model.activeSearchText = search.toLowerCase();
    this.model.isCacheEnabled.value && this.model.cache[this.model.activeSearchText] ?
      this.onCacheSearch(this.model.activeSearchText) :
      this.onSetCacheSearch(search);
  }
  private cacheControl = (status: boolean) => {
    if (!status) {
      this.model.cache = {};
    }
  }

  private onCacheSearch = (search: string) => {
    const start = +new Date();
    this.model.users = this.model.cache[search];
    this.model.isSearching = false;
    this.model.performance = +new Date() - start + 'ms';
  }

  private onSetCacheSearch = (search: string) => {
    this.activeTimeout = setTimeout((value) => {
      const start = +new Date();

      if (this.model.isCacheEnabled.value) {
        const prevCache = value.substr(0, value.length - 1);

        this.model.cache[value] = (this.searchPipe.transform(
          this.model.cache[prevCache] ? this.model.cache[prevCache] : this.userList,
          'name,title',
          value
        ));

        this.model.users = this.model.cache[value];
      } else {
        this.model.users = (this.searchPipe.transform(this.userList, 'name,title', value));
      }
      this.model.isSearching = false;

      this.model.performance = +new Date() - start + 'ms';
    }, 250, search.toLowerCase());
  }
}
