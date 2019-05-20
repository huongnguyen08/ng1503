import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
        <h3>User Component</h3>
        <p>{{name}}</p>
    `
})
export class UserComponent {
    name = 'Huong';
}
