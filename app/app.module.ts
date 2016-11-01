import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {AppComponent} from "./component/app.component/app.component";
import {HttpComponent} from "./component/app.http/app.http";
import {PipeComponent} from "./component/app.pipe/app.pipe";
import {TimestampPipe} from "./pipe/timestamp.pipe";

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent, HttpComponent,PipeComponent,TimestampPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
