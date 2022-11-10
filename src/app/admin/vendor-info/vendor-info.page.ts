import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.page.html',
  styleUrls: ['./vendor-info.page.scss'],
})
export class VendorInfoPage implements OnInit {

  tempid=[]
  public vendorInf:any=[];
  start=0;
  limit=10;
  page=1;
  pages;
  maxPage=0
 public vendorUser:any=[]
 public lowercaseId:any=[];
 public tempIds:any;

 public namevendor:any=[]
 public vendornames:string;
 public vendornamecase:string;
 public vendorComp:string;
  vendorName:any
  vendorEmail:any;
  constructor(private router:Router,
    private navcntrl:NavController,
    private api: ApiService) { }

  ngOnInit() {
    this.getvenodrdetails();
  }


  // getvenodrdetails(){
  //   // console.log(this.api.adminId)
  //   this.vendorUser=[]
  //   this.tempid=[]
  //   this.api.getallvendorAdd().subscribe(res=>{
  //     console.log('vendor',res);
  //     res.map(user=>{
  //     console.log('user name', res.name)
  //     this.vendorUser.push(user)
  //      this.vendorInf.push(user)
  //       this.tempid.push(user.temporaryId)
  //       this.namevendor.push(user.companyname)
  //       // console.log(this.tempid)
  //     })
  //     console.log('res',res, res.name)
  //     // this.adminUser.push(res)
  //     // this.vendorInf = this.vendorInf.slice(0,this.limit);
  //   })
  // }

  getvenodrdetails(){
    // console.log(this.api.adminId)
    this.vendorUser=[]
    this.api.getallvendorAdd().subscribe(res=>{
      console.log('vendor',res);
      this.vendorInf=res
     
      console.log('res',res, res.name,this.vendorInf)
      // this.adminUser.push(res)
     this.vendorUser = this.vendorInf.slice(0,this.limit);
     let num= this.vendorInf.length%10 == 0 ? 0 : 1;
     this.maxPage=Math.trunc(this.vendorInf.length/10)+num;
      console.log(this.vendorInf,'len')
    })
  }
  moveToAd(){
    this.router.navigate(['/admin/administrator-accounts'])
  }
  moveToInVendor(){
    this.router.navigate(['admin/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['admin/home'])
  }
  moveToAddVendor(){
    this.router.navigate(['admin/addvendor'])
  }
  moveToTopLevel(){
    this.router.navigate(['admin/top-level'])
  }
  moveToPurchase(){
    this.router.navigate(['admin/purchase-order'])
    // this.router.navigate(['/purchase-order'])
  }

  moveToLoginInfo(data){
// this.router.navigate(['admin/login-info'],{
//   queryParams:{
//     item:data
//   }
// });
this.navcntrl.navigateRoot('admin/login-info',{state:{item:data}});

  }

  searchElement(eve){
    console.log(eve)
    console.log(eve.target.value)
    console.log(this.vendorUser)
    this.vendornames= eve.target.value
    // this.vendornamecase= eve.target.value.toUpperCase()
    this.vendorComp= eve.target.value.toUpperCase()
    const query = eve.target.value.toLowerCase();
    if(eve.target.value.length !== 0){
       this.lowercaseId=[]
       console.log(this.tempid)
        this.tempid.forEach(id =>{
          this.lowercaseId.push(id.toLowerCase())
        })
     console.log(this.lowercaseId)
     let tempid:any =[...this.lowercaseId]
     tempid = this.lowercaseId.filter(value =>
       value.toLowerCase().indexOf(query) > -1
     )
     console.log(tempid);
     this.tempIds = tempid;
    console.log(this.tempIds)
   
    }
     if(eve.target.value.length === 0){
      this.vendorUser=[]
     this.api.getallvendorAdd().subscribe(res=>{
      console.log('vendor',res);
      res.map(user=>{
      console.log('user name', res.name)
      console.log('user name', user)
      this.vendorUser.push(user)
     
       })
      })
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
      this.vendorUser = this.vendorInf.slice(this.start,this.limit);
      if(this.start===0){
        // this.butval=false
        console.log(true)
      }
  }
next(){
    console.log(this.limit,this.vendorUser.length)
    if(this.limit>=this.vendorInf.length){
      console.log(true)
      return;
    }
     this.start+= 10;
    this.limit += 10;
    this.pages=this.page +=1 ;
    console.log('hi',this.start,this.page)
      this.vendorUser = this.vendorInf.slice(this.start,this.limit);
      if(this.limit>=this.vendorUser.length){
        // this.butval=true;
        console.log(this.limit,true)
      }
  }
  search(){
    console.log(this.tempIds)
    // if(this.tempIds)
    // this.vendorUser.forEach((res, index) =>{
    //   this.tempIds.map(id =>{
    //       // this.vendorUser=[];
    //       const idss= res.temporaryId.toLowerCase()
    //     console.log(res.temporaryId , this.vendornames, idss === this.vendornames)
    //       if(idss === id){
    //       console.log(res)
    //       this.vendorUser.push(res)
    //       console.log(this.vendorUser)
    //     }

    //   })
    // })
    this.tempidSrc(this.vendorComp)
    this.companyname(this.vendornames)
    this.vendorNa(this.vendornames)
    // if(this.vendorComp){
    // }
  }

  tempidSrc(tempid){
      this.vendorUser=[]
      this.api.getSearchTemp(tempid).subscribe(tem =>{
        console.log(tem)
      this.vendorUser.push(tem)
     })
  }

  companyname(Cname){
    this.vendorUser=[]
    this.api.getSearchcompname(Cname).subscribe(use =>{
      // console.log(use)
    this.vendorUser.push(use)
    })
  }

  vendorNa(Fname){
    this.vendorUser=[]
    this.api.getSearchfirstName(Fname).subscribe(use =>{
      // console.log(use)
    this.vendorUser.push(use)
    })
  }

}
