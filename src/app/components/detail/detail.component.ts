import { Component, OnInit ,ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, Compiler, Injector,SkipSelf} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecordService } from "../../services/record.service";
import { Record } from "../../model/record";
import {Observable} from 'rxjs';
import { from } from 'rxjs';

declare var System:any;

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.less"]
})
export class DetailComponent implements OnInit {
  public record: Record;
  constructor(private route: ActivatedRoute, private recordService: RecordService,public compiler: Compiler,@SkipSelf() private injector: Injector) {
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

  @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere: ViewContainerRef;
  private cfr:any;

 

  ngAfterViewInit(){
    
    const url = 'https://gist.githubusercontent.com/dianadujing/a7bbbf191349182e1d459286dba0282f/raw/c23281f8c5fabb10ab9d144489316919e4233d11/app.module.ts';
    console.log(System.import(url));

    //emit result of promise
// const promiseSource = from(System.import(url));
// //output: 'Hello World'
// const subscribe = promiseSource.subscribe(val => console.log(val));
    
    // const importer = (url:any) => Observable.from(System.import(url));
    // const importer = (url:any) => from(System.import(url));
    // console.log('importer:', importer);
    // importer(url)
    //   .subscribe((modules) => {
    //     console.log('modules:', modules, modules['AppModule']);
    //     this.cfr = this.compiler.compileModuleAndAllComponentsSync(modules['AppModule']);
    //     console.log(this.cfr,',', this.cfr.componentFactories[0]);
    //     this.putStuffHere.createComponent(this.cfr.componentFactories[0], 0);
    //   });
    
      System.import(url).then((module) => {
        const moduleFactory = this.compiler.compileModuleSync(module.default);
        const moduleRef = moduleFactory.create(this.injector);
        const widgets = moduleRef.injector.get('widgets');
        const resolver = moduleRef.componentFactoryResolver;
        const componentFactory = resolver.resolveComponentFactory(widgets[0][0].component);
        this.putStuffHere.createComponent(componentFactory);
    })
  }

}
