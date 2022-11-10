import { Injectable } from '@angular/core';
import {AngularFireStorage, GetDownloadURLPipeModule} from '@angular/fire/compat/storage';
import {take, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  
  FileUpload: {
    key: string;
    name: string;
    url: string;
    file: File;
  }
  public unSubscriber$ = new Subject()
  constructor(private storage: AngularFireStorage) { }

  public uploadContent(file: any, fileName: any): Promise<any> {
    // this.storage.ref(`uploads/${fileName}`).delete
    return new Promise((resolve, reject) => {
      try {
        if (file) {
          return this.storage.upload(`uploads/${fileName}`, file).then(
            success => {
              return this.storage.ref(`uploads/${fileName}`).getDownloadURL().pipe(takeUntil(this.unSubscriber$)).subscribe(url => {
                resolve({ url, fileName });
              });
            },
            failure => {
              reject(failure);
            }
          )
            .catch(err => {
              reject(err);
            });
        }else {
          reject(new Error(' choice key not given'));
        }
      } catch (e) {
        reject(e);
      }
    });
  }

  // public download(url:any){
  //   return new Promise((resolve, reject) => {
  //   this.storage.refFromURL(url).getDownloadURL().subscribe(down =>{
  //     console.log(down)
  //   })

  //   })
  // }
}
