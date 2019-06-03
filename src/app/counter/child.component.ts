import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <button (click)="increase()">Increase</button>
        <button>Decrease</button>
        <button>Reset</button>
    `
})

export class ChildComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
