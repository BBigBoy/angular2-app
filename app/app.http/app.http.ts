import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'http-app',
    template: '<div>{{hello.hello}}</div>'
})
export class HttpComponent implements OnInit {
    hello = {"hello": "hello inside"};

    constructor(private http: Http) {
        this.s = (()=> {
            let hello = this.hello;
            return function (res) {
                setTimeout(()=> {
                    hello.hello = res.hello;
                }, 2000);
            }
        })();
    }

    ngOnInit(): void {
        this.http
            .get('/material/http.json')
            .map(response=>response.json())
            .subscribe(this.s);
    }

}
