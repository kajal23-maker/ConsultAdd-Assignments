import { Component } from '@angular/core';
import { MyapiService } from '../myapi.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(private api: MyapiService){}
  data:any;
  sorted:any;
  // url = '../myapi.json';
  ngOnInit(): void{
    this.api.getData().subscribe((data)=>{
      this.data=data;
      console.log(data);
    })    
  }
  

}
