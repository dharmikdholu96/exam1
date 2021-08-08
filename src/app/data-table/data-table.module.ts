import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableService } from './data-table.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [DataTableComponent],
  exports: [DataTableComponent],
  providers: [DataTableService]
})
export class DataTableModule { }
