import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHttpService } from './core-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [CoreHttpService]
})
export class CoreHttpModule { }
