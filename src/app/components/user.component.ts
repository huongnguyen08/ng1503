import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // templateUrl: './user.component.html'
    template: `
        <h3>User Component</h3>
        <!-- data binding-->
        <p>{{ name }}</p>

        <br><br><br><br><br><br><br>
    `
    ,
    styles: [
    ]
})
export class UserComponent {
    name = 'Teo';

    constructor() {
    }
}
