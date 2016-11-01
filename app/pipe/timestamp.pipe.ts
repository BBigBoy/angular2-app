import {Pipe, PipeTransform} from '@angular/core';
/*
 * date to timestamp
 * 注意自定义管道需要在module中declarations 中声明
 * 另外还存在一种非纯管道，没有很大实用性，建议少用。
 * */
@Pipe({name: 'timestamp'})
export class TimestampPipe implements PipeTransform {
    /*
     *  exponent1 代表管道后面通过冒号设置的参数，可通过多个冒号设置多个参数，
     * 对应的transform(value, exponent1, exponent2, exponent3...)
     * */
    transform(value: number, exponent1: string): number {
        let num = ((exponent1 == 'milli') ? 1 : 1000);
        return Number.parseInt((new Date(value)).valueOf() / num);
    }
}