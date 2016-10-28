import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Hello} from "../hello";

@Injectable()//此处括号不能忘，否则Can't resolve all parameters for ParamDecorator
export class HelloService {

    constructor(private http: Http) {
    }

    getHelloStr(url: string):Observable<Hello>{
        return this.http
            .get(url)
            .map(res=>res.json());
    }
}