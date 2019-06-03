import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-child',
    template: `
        <button (click)="increase()">Increase</button>
        <button>Decrease</button>
        <button>Reset</button>
    `
})

export class ChildComponent implements OnInit {

    constructor(private store: Store<number>) { }

    ngOnInit() { }
    increase() {
        
    }
}
