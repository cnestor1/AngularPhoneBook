import { Component, OnInit } from "@angular/core";
import { RecordService } from "../../services/record.service";
import { Record } from "../../model/record";
import { Router } from "@angular/router";

@Component({
  selector: "app-records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.less"]
})
export class RecordsComponent implements OnInit {
  records: Record[] = [];

  columnDefs = [
    { headerName: "Id", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Phone", field: "phone" }
  ];
  private rowSelection;
  private gridApi;
  private gridColumnApi;

  constructor(private recordService: RecordService, private router: Router) { }

  ngOnInit() {
    this.getRecords();
  }


  getRecords(): any {
    this.recordService.getRecords().subscribe(records => { this.records = records; });
  }


  // onSelectionChanged(event: any) {
  //   console.log("selection", event);
  //   const row = event.api.GridApi.getSelectedRows();
  //   console.log("row:" + row);
  // }

  onRowSelected(event) {
    if (event.node.isSelected(true)) {
      this.recordService.setSelectedRecord(event.data);
      this.router.navigate(["/detail/", { id: event.data.id }]);
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
