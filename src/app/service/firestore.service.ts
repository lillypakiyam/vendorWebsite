import { Injectable } from '@angular/core';
import {AngularFirestore, QueryFn} from '@angular/fire/compat/firestore'
import {BaseDtoModule} from 'src/app/pages/models/base-dto/base-dto.module'
import * as firebase from 'firebase/compat/app'
import {Observable} from 'rxjs'
import {take} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private Angularfire: AngularFirestore,) {}

  public createWithId<T extends BaseDtoModule>(collection: string, data: T): Promise<void> {
    return this.Angularfire.doc<T>(`${collection}/${data.id}`).set(this.addcreatedAt(data));
  }

  public findAlldr<T extends BaseDtoModule>(collection: string): Observable<T[]> {
    return this.Angularfire.collection<T>(collection).valueChanges({ idField: 'id' }).pipe(take(1));
  }

  public async create<T extends BaseDtoModule>(collection:string, data: T) :
   Promise<firebase.default.firestore.DocumentSnapshot<firebase.default.firestore.DocumentData>>{
    const doc = await this.Angularfire.collection<T>(collection).add(this.addcreatedAt(data));
    return doc.get()
   }

   public getOne<T extends BaseDtoModule>(collection: string, id: string): Observable<T> {
    return this.Angularfire.doc<T>(`${collection}/${id}`).valueChanges().pipe(take(1));
  }
   addcreatedAt(data:any){
    return{
      ...data, createdAt: firebase.default.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.default.firestore.FieldValue.serverTimestamp()
    };
   }
   
}
