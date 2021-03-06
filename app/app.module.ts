import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {AppComponent} from "./app.component/app.component";
import {HttpComponent} from "./app.http/app.http";

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent, HttpComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
