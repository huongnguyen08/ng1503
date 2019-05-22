import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // templateUrl: './user.component.html'
    template: `
        <h3>User Component</h3>
        <!-- data binding -->
        <p>{{ name }}</p>

        <!-- style binding -->
        <p [style.color]="1==2 ? redColor : blueColor" >Your name</p>

        <!-- property binding -->
        <p [id]="myId">Your name</p>
        <p [class]="myClass">Your name</p>
        <input [disabled]='isDisabled'  value="KPT" placeholder="Enter your name">


        <br><br><br><br><br><br><br>
    `
    ,
    styles: [
        `
        #your-name {
            color: green;
            font-family: Tahoma
        }
        .text-danger{
            color: red
        }
        .text-bold{
            font-weight: bold
        }
        `
    ]
})
export class UserComponent {
    name = 'Teo';
    redColor = 'red';
    blueColor = 'blue';
    myId = 'your-name';
    myClass = 'text-danger text-bold';
    isDisabled = true;

    constructor() {
    }
}
