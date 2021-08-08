import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HitsDataModal, ResponseModal } from './data-table.modal';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  sourceData: Array<HitsDataModal> = [];
  displayedColumns: Array<string> = ["Title", "URL", "Created At", "Author"];
  searchValue: string = "";
  selectedRowData: string = "";
  isAutoCall: boolean = true;
  constructor(private dataTableService: DataTableService,
    private modalService: NgbModal) {
  }

  getData = () => {
    this.dataTableService.getData<ResponseModal>().subscribe((response: ResponseModal) => {
      console.log(response);
      this.sourceData = response.hits;
      setTimeout(() => {
        if (this.isAutoCall) {
          this.getData();
        }
      }, 10000);
    });
  }

  ngOnInit() {
    this.getData();
  }

  openDialog(content, item) {
    this.selectedRowData = JSON.stringify(item);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  search = () => {
    let search = this.searchValue.trim();
    if (search !== "") {
      this.sourceData = this.sourceData.filter(f => f.title === this.searchValue);
      this.isAutoCall = false;
      return;
    }
    this.isAutoCall = true;
  }

  clear = () => {
    this.isAutoCall = true;
    this.searchValue = "";
    this.getData();
  }

}

