import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h2>Parent</h2>
        <app-children></app-children>

    `
})
export class ParentComponent {
    number = 1;
}
