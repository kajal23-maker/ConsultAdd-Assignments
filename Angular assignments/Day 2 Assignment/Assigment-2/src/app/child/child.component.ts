import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor(private api: ApiServiceService){}
  
  info:any;
  @Input() test = false;
  ngOnInit(): void{
    this.api.getData().subscribe((data)=>{
      this.info = data;
    })
    this.api.check=false;
  }
}
