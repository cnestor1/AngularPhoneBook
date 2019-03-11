import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecordService } from "../../services/record.service";
import { Record } from "../../model/record";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.less"]
})
export class DetailComponent implements OnInit {
  public record: Record;
  constructor(private route: ActivatedRoute, private recordService: RecordService) {
    route.params.subscribe(val => { this.getRecord(); });
  }

  ngOnInit(): void {
    // const record = +this.route.snapshot.paramMap.get("data");
    this.getRecord();
    // const record = this.recordService.getSelectedRecord();
  }
  getRecord(): void {
    this.record = this.recordService.getSelectedRecord();
  }

}
