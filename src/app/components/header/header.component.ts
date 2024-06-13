import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private api:ApiService){}

  search(event:any){ //r ri rin ring 
    this.api.searchTerm.next(event.target.value)
    console.log(event.target.value);
    
  }
}
