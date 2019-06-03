import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-filter-product',
    templateUrl: './filter-product.component.html'
})
export class FilterProductComponent {

    @Input() filterMode: string;

    changeFilterMode(input: string) {
        // this.filterMode = input;
    }
}
