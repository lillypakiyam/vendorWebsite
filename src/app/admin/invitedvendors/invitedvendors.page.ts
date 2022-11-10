import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular'
import { ApiService } from 'src/app/service/api.service';
import { UtilService } from 'src/app/service/util.service';
import * as moment from 'moment';
import { InituserService } from 'src/app/service/inituser.service';
@Component({
  selector: 'app-invitedvendors',
  templateUrl: './invitedvendors.page.html',
  styleUrls: ['./invitedvendors.page.scss'],
})
export class InvitedvendorsPage implements OnInit {

  start=0;
  limit=10;
  page=1;
  pages;
  count=10;
  maxPage=0;
  public vendornames:string;
  public vendorComp:string;
  private loggedinUser:any;
  private lowercaseId:any=[];
  public vendorInvite:any;
  public vendordate:any=[];
  public vendorName:any=[];
  public vendordetails:any=[];
  public vends:any=[];
  public vendsCount:any=[];
  public firstName:any=[];
  public vendorid:any=[];
  public tempId:any=[];
  public tempIds:any;
  constructor(private router: Router,
              private util: UtilService,
              private initUser: InituserService,
              private api: ApiService,) { 
                this.api.getAllvend().subscribe(user =>{
                  console.log(user)
                  this.vends.push(user)
                  this.api.vendorInvite=this.vends
                  this.vendorName=this.vends
                   
                  // this.vendorName.push(user)
                    this.vendordetails.push(this.vends)
                    // console.log(user.temporaryId)
                  this.api.vendorInvite = this.api.vendorInvite.slice(0,this.limit);
                  let num= this.vendorName.length%10 == 0 ? 0 : 1;
                  this.maxPage=Math.trunc(this.vendorName.length/10)+num;
                  // this.vends=this.vends.splice(0,this.count)
                // console.log(this.limit,this.vendorInvite)
                // let count = Math.round(user.length/10)
                // console.log(count)
                // this.vendordetails =this.vendordetails.splice(0,this.limit)

                  
                // console.log(this.vends)

                  this.vendordetails.forEach(res =>{
                    res.map(data =>
                  {
                    this.vendorid.push(data.companyname)
                    this.tempId.push(data.temporaryId)
                    this.firstName.push(data.first_name)
                    // console.log(data.companyname.toLowerCase().indexOf(eve.srcElement.value.toLowerCase())>-1)
                    // console.log(this.tempId)
                   })
                 }) 
                
              })
                this.loggedinUser = this.initUser.getUserData();
                console.log(this.loggedinUser)
                // this.pages=this.page +1 ;

                this.vendorCount()
                // this.api.getAllvend().subscribe(res=>{
                //   console.log(res)
                // })
              }


  ngOnInit() {
  }
  // moveToAd(){
  //   this.router.navigate(['/administrator-accounts'])
  // }
 async vendorCount(){
    console.log(this.vends)
                if(this.vends.length !==0){
                const chunkSize =10
                while (this.vends.length > 0) {
                    const chunk = this.vends.splice(0, chunkSize);
                    this.vends.push(chunk);
                }
                console.log(this.vends)
                }
  }
  moveToInVendor(){
    this.router.navigate(['/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['/home'])
  }

  async inviteAnother(){
    if(this.loggedinUser.manageAdmin === 'Y'){
      this.util.goForward('admin/addvendor')
    }else{
      const toast = await this.api.createToast('you are not allowed', false, 'middle')
      await toast.present()
    }
    // this.router.navigate(['admin/addvendor'])
  }

  inviteNav(data){
    if('home' === data){
    this.router.navigate(['admin/home'])
    }
    if('toplevel' === data){
      this.router.navigate(['admin/top-level'])
    }
    if('purchase' === data){
      this.router.navigate(['admin/purchase-order'])
    }
    if('vendorinform' === data){
      this.router.navigate(['admin/vendor-info'])
    }
    if('invitedvendors' === data){
      this.router.navigate(['admin/invitedvendors'])
    }
    if('invited' === data){
    this.router.navigate(['admin/administrator-accounts']);
    }
  }

  searchbyDate(date, tdate){
    // this.today = moment().format('ll');
    this.vendordate=[];
    this.api.vendorInvite=[]
    console.log(date, tdate)
    // if(date !== undefined && tdate !== undefined){
      this.api.getSearchDate(date, tdate).subscribe(user =>{
      console.log(user,'use')
      this.vendordate.push(user)
      this.api.vendorInvite= this.vendordate
     console.log(this.api.vendorInvite, this.vendordate.length)
    })
    // }else{
    // this.api.getallVendor().subscribe(user =>{
    //   console.log(user)
    //   this.vendorInvite=user
    //   console.log(this.vendorInvite, this.vendorInvite.length)
    //  })
    // }
  }

  searchElement(eve){
    console.log(this.firstName)
    console.log(eve.target.value.length)
   console.log(this.vendorid)
   this.vendornames= eve.target.value
   this.vendorComp= eve.target.value.toUpperCase()

    let result:any=[...this.vendorid]
      const query = eve.target.value.toLowerCase();
        result = this.vendorid.filter(d => 
        d.toLowerCase().indexOf(query) > -1
      );
    console.log(result)

   this.lowercaseId=[]
   console.log(this.tempId)
    this.tempId.forEach(id =>{
      console.log(id.toLowerCase())
      this.lowercaseId.push(id.toLowerCase())
    })
    console.log(this.lowercaseId)
    let tempid:any =[...this.lowercaseId]
    // const ids = eve.target.value.toLowerCase();
    tempid = this.lowercaseId.filter(value =>
      value.toLowerCase().indexOf(query) > -1
    )
    console.log(tempid);
    this.tempIds = tempid;

  //   if(eve.target.value.length !== 0){
  //     this.lowercaseId=[]
  //     console.log(this.tempid)
  //      this.tempid.forEach(id =>{
  //        this.lowercaseId.push(id.toLowerCase())
  //      })
  //   console.log(this.lowercaseId)
  //   let tempid:any =[...this.lowercaseId]
  //   tempid = this.lowercaseId.filter(value =>
  //     value.toLowerCase().indexOf(query) > -1
  //   )
  //   console.log(tempid);
  //   this.tempIds = tempid;
  //  console.log(this.tempIds)
  //  }
    if(eve.target.value.length === 0){
     this.api.vendorInvite=[]
     this.vendorInvite=[]
     this.api.getAllvend().subscribe(user =>{
      console.log(user)
      this.vendorInvite.push(user)
      this.api.vendorInvite=this.vendorInvite

      this.api.vendorInvite = this.api.vendorInvite.slice(0,this.limit);
      let num= this.vendorName.length%10 == 0 ? 0 : 1;
      this.maxPage=Math.trunc(this.vendorName.length/10)+num;
      })
    }

  }

  search(){
    console.log(this.tempIds)
    // this.vendorInvite.filter(res =>{
    //   this.tempIds.filter(id =>{
    //     const idss= res.temporaryId.toLowerCase()
    //     console.log(res.temporaryId , id, res.temporaryId === id, idss)
    //     if(idss === id){
    //       console.log(res)
    //       this.vendorInvite.push(res)
    //     }
    //   })
    // })
    this.tempidSrc(this.vendorComp)
    this.companyname(this.vendornames)
    this.vendorNa(this.vendornames)
  }

  tempidSrc(tempid){
    this.api.vendorInvite=[]
    this.api.getSearchTemp(tempid).subscribe(tem =>{
      console.log(tem)
    this.api.vendorInvite.push(tem)
   })
}

companyname(Cname){
  this.api.vendorInvite=[]
  this.api.getSearchcompname(Cname).subscribe(use =>{
    // console.log(use)
  this.api.vendorInvite.push(use)
  })
}

vendorNa(Fname){
  this.api.vendorInvite=[]
  this.api.getSearchfirstName(Fname).subscribe(use =>{
    // console.log(use)
  this.api.vendorInvite.push(use)
  })
}

  vendorinfo(data){
  console.log(data)
  this.api.tempVendor = data
  this.router.navigate(['admin/deletedvendor']);
  }

  DownloadSes(data){
    window.open(data.invoiceUpload)
      
  }

  loadMore(){
   if(this.limit>=this.vendorName.length){
     console.log(true)
     return;
   }
   this.start+= 10;
   this.limit += 10;
   this.pages=this.page +=1 ;
   console.log(this.start,this.page)
   this.api.vendorInvite = this.vendorName.slice(this.start,this.limit);
    if(this.limit>=this.vendorName.length){
      // this.butval=true;
    }
  }

  prev(){
   if(this.start===0){
     console.log(true)
     return;
   }
   this.start-= 10;
   this.limit -= 10;
   this.page -= 1;
   this.api.vendorInvite = this.vendorName.slice(this.start,this.limit);
   // if(this.start===0){
   //   // this.butval=false
   //   console.log(true)
   // }
   // console.log(start,this.limit)
  }

}
