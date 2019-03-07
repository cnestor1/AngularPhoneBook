import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../services/record.service';
import { Record } from '../../model/record';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.less']
})
export class RecordsComponent implements OnInit {
  records: Record[] = [];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.getRecords();
  }


  getRecords(): any {
    this.recordService.getRecords().subscribe(records => { this.records = records; });
  }
}
