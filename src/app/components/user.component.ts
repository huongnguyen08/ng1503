import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
        <h3>User Component</h3>
        <p [style.color]="textRed">{{name}}</p>
        <p [class]='myClass'>Name</p>
        <p>{{age}}</p>
    `
    ,
    styles: [
        `
        .text-danger{
            color: red;
        }
        .text-large{
            font-size: 25px
        }
        `
    ]
})
export class UserComponent {
    name = 'Huong';
    age: number;
    textRed = 'red';

    myClass = 'text-danger text-large';

    constructor() {

    }
}
