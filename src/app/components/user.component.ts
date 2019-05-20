import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
    // template: `
    //     <h3>User Component</h3>

    //     <p [style.color]='1==2 ? textBlue : textRed'>{{name}}</p>
    //     <p [class]='myClass'>Name</p>
    //     <div *ngIf=isDisabled>
    //         <input disabled placeholder="Enter name 01">
    //     </div>
    //     <div>
    //         <input placeholder="Enter name 02">
    //     </div>
    //     <p>{{age}}</p>
    //     <br><br><br><br><br><br><br>
    // `
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
    textBlue = 'blue';
    isDisabled = false;

    myClass = 'text-danger text-large';

    constructor() {

    }
}
