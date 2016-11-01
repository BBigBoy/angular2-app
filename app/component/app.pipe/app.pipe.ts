import {Component} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'pipe-app',
    templateUrl: "app.pipe.html"
})
export class PipeComponent {
    birthday = new Date(); // April 15, 1988
    toggle = true; // start with true == shortDate

    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }

    toggleFormat() {
        this.toggle = !this.toggle;
    }
}
