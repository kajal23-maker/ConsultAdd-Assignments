import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MyapiService } from '../myapi.service';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  constructor(private api: MyapiService){}
  @Input() data: any[] | undefined;
  sortAge(prop: string){
    if(this.data){
      this.data.sort((a:any,b:any) => {
        if(a[prop] < b[prop]){
          return -1;
        }else if(a[prop] > b[prop]){
          return 1;
        }else{
          return 0;
        }
      });
    }
  }
  
  sortName(prop: string){
    if(this.data){
      this.data.sort((a:any,b:any) =>{
        if(a[prop] < b[prop]){
          return -1;
        }else if(a[prop] > b[prop]){
          return 1;
        }else{
          return 0;
        }
      });
    } 
  }
}
