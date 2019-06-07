import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-weather',
    template: `<h2>Weather Component</h2>`
})
export class WeatherComponent {
    // https://api.openweathermap.org/data/2.5/find?appid=01cc37655736835b0b75f2b395737694&q=Saigon
    constructor(private http: HttpClient) {

    }
}
