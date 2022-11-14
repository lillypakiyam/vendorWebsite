import { Injectable } from '@angular/core';
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Observable, Subject} from 'rxjs'
import {take, takeUntil} from 'rxjs/operators'
import { FirestoreService } from './firestore.service';
import {ToastController} from '@ionic/angular'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public id;
  public adminId:string;
  public adminUser:string;
  public loginUserId:string;
  public tempVendor:any;
  private passwordChange=false
 public apiUrl = 'http://localhost:8100/login/';
  
  public unSubscribe$ = new Subject();
  constructor(private fireAuth:FirebaseAuthenticationService,
              private auth: AngularFireAuth,
              private toaster:ToastController,
              private http:HttpClient,
              private firestore : FirestoreService) { }

  logout() {
    return this.fireAuth.logout();
  }

  updateToken(id: any){
    this.id = id
    console.log('id',this.id)
  }  
  signUp(admin): Observable<any> {
    console.log(admin, admin['email'], admin['password'])
    const adminInfo = {
      'id' :  null,
      'name' : `${admin['name']}`,
      'email' : `${admin['email']}`,
      'username' : `${admin['email']}`,
      'phoneno' : `${admin['phone']}`,
      'password' : `${admin['password']}`
    };

    return new Observable((observer) => {
      this.fireAuth.createAccount(admin['email'], admin['password'])
      .then(user => {
        console.log(user);
        adminInfo.id = user.uid;
        this.firestore.createWithId('admin', adminInfo).then(usr => {
        console.log(admin, admin['email'], admin['password'])
        console.log(usr);
          observer.next(adminInfo);
        }, err => {
          observer.error(err);
        });
      }).catch(err => {
        observer.error(err);
      });
    });
  }

  signUpAdd(admin): Observable<any> {
    console.log(admin, admin['email'], admin['name'])
    const adminInfo = {
      'id' :  null,
      'name' : `${admin['name']}`,
      'email' : `${admin['email']}`,
      'viewersOnly' : `${admin['viewersOnly']}`,
      'manageAdmin' : `${admin['manageAdmin']}`,
      'temporary_password' : `${admin['name']}`
    };

    return new Observable((observer) => {
      this.fireAuth.createAccount(admin['email'], admin['password'])
      .then(user => {
        console.log(user);
        adminInfo.id = user.uid;
        this.firestore.createWithId('adminAdd', adminInfo).then(usr => {
          console.log(usr);
          observer.next(adminInfo);
        }, err => {
          observer.error(err);
        });
      }).catch(err => {
        observer.error(err);
      });
    });
  }
  getoneAdmin(adminId): Observable<any> {
    return this.addIdToObject(adminId, this.firestore.getOne('admin', adminId));
  }

  getoneAdminuser(): Observable<any> {
    return this.addIdToObject(this.id, this.firestore.getOne('admin', this.id));
  }

  getoneVendoruser(): Observable<any> {
    return this.addIdToObject(this.id, this.firestore.getOne('vendorAdd', this.id));
  }

  getSearchDate(date, dates): Observable<any>{
    // console.log(date)
    return this.firestore.getdate('vendorAdd', ref => ref
    .where('invite_Date','>=',date)
    .where('invite_Date','<=',dates)
    );
  }

  getallAdmin(): Observable<any>{
    return this.firestore.findAlldr('admin')
  }

  getallvendorAdd():Observable<any>{
    return this.firestore.findAlldr('vendorAdd')
  }
  getallVendor(): Observable<any>{
    return this.firestore.findAlldr('vendorAdd')
  }

  // sendEmail(data: any[]) {
  //   return this.http.post(this.apiUrl+'lilypackiyam@gmail.com', data);
  // }

  getUser(): Observable<any> {
    console.log('id', this.id);
    return this.firestore.getFuncOne('admin', this.id);
  }

  getVendorUser(): Observable<any> {
    console.log('id', this.id);
    return this.firestore.getFuncOne('vendorAdd', this.id);
  }

  getSchHistory(email:any): Observable<any>{
    return this.firestore.getDataOnce('admin', ref => ref
    .where('email','==',email)
  )}

  getvendorHistory(email:any): Observable<any>{
    return this.firestore.getDataOnce('vendorAdd', ref => ref
    .where('requestEmail','==',email)
  )
 }

  updatetax(id,data:any):Promise<any>{
  console.log('id', this.id);
  return this.firestore.update('vendorAdd',id, data);
 }

  async createToast(message, showCloseButton = false, position = 'bottom' as 'top' | 'bottom' | 'middle', duration = 5000): Promise<HTMLIonToastElement>{
    const toast = await this.toaster.create({
      message,
      position,
      duration,
      color:'danger',
      buttons: [{
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    return toast;
  }

  async createToasts(message, showCloseButton = false, position = 'bottom' as 'top' | 'bottom' | 'middle', duration = 5000): Promise<HTMLIonToastElement>{
    const toast = await this.toaster.create({
      message,
      position,
      duration,
      color:'success',
      buttons: [{
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    return toast;
  }

  logIn(username: string, password: string): Observable<any> {
   const admin:any={
    id:'',
    email: username,
    password:password
     }
    return new Observable((observer) => {
      this.fireAuth.login(username, password)
        .then(user => {
          observer.next({ id: user.uid });
          this.firestore.createWithvendor('vendor',user.uid, admin).then(res=>{
            console.log(res)
          })
        }).catch(err => {
          observer.error(err);
          //console.log(err);
        });
    });
  }

  addIdToObject(id, obj: Observable<any>) {
    return new Observable((observer) => {
      obj
        .pipe(takeUntil(this.unSubscribe$)).subscribe(ref => {
          const newObj = ref;
          if (newObj) {
            newObj.id = id;
          }
          observer.next(newObj);
        }, err => {
          observer.error(err);
        });
    });
  }
}
