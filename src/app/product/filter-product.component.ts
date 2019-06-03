import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-filter-product',
    templateUrl: './filter-product.component.html'
})
export class FilterProductComponent {

    @Input() filterMode: string;
    @Output() filter = new EventEmitter();

    changeFilterMode(input: string) {
        console.log(input);
        this.filter.emit(input);
    }
}
