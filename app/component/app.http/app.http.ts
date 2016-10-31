import {Component, OnInit} from '@angular/core';
import {HelloService} from "../../service/hello.service";

@Component({
    selector: 'http-app',
    template: '<div>{{hello.hello}}</div>',
    providers:[HelloService]
})
export class HttpComponent implements OnInit {
    hello = {"hello": "hello inside"};
    url:string='/material/http.json';
    s:any;

    constructor(private helloService:HelloService) {
        this.s = (()=> {
            let hello = this.hello;
            return function (res:any) {
                console.log(res);
                setTimeout(()=> {
                    hello.hello = res.hello;
                }, 1000);
            }
        })();
    }

    ngOnInit(): void {
        this.helloService.getHelloStr(this.url)
            .subscribe(this.s,err=>console.error(err),()=>console.log("complete"));
    }

}
