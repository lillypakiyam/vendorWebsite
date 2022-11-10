import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.page.html',
  styleUrls: ['./deleted.page.scss'],
})
export class DeletedPage implements OnInit {

  deleteVendor:any;
  constructor(private api: ApiService) { 
    this.api.getalldeleVendor().subscribe(delet =>{
      console.log(delet)
      this.deleteVendor=delet
    console.log(this.deleteVendor)
  })
  }

  ngOnInit() {
  }

}
