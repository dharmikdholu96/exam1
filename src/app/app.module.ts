import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTableModule } from './data-table/data-table.module';
import { CoreModule } from './Providers/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DataTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
