import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  // templateUrl: './app.component.html',
  template: `
    <h2>Hello Angular</h2>
    <p>{{title}}</p>
    <p>{{title}}</p>
  `,
  // styleUrls: ['./app.component.css']
  styles: [
    `
    p{
      font-size: 20px;
      color: red;
    }
    `
  ]
})
export class AppComponent {
  title = 'ng1503';
}
