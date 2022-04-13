import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular App';
  userObject = {
    name: 'John',
    age: '32',
    id: 0,
    isColored: true,
  };

  posts: any = this.httpService.getRequest(
    'https://jsonplaceholder.typicode.com/posts'
  );

  showUser: boolean = true;

  constructor(private httpService: HttpService) {}

  // handleEvent() {
  //   this.httpService
  //     .getRequest('https://jsonplaceholder.typicode.com/todos/1')
  //     .subscribe((response) => console.log('hi'));
  // }
  handleEvent(event: any) {
    console.log(event);
  }

  // getPosts(): any {
  //   this.httpService
  //     .getRequest('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((res) => {
  //       this.posts = res;
  //     });
  // }

  ngOnInit(): void {
    // this.getPosts();
  }
}
