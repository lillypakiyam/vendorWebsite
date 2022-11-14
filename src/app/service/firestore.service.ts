import { Injectable } from '@angular/core';
import {AngularFirestore, QueryFn} from '@angular/fire/compat/firestore'
import {BaseDtoModule} from 'src/app/pages/models/base-dto/base-dto.module'
import * as firebase from 'firebase/compat/app'
import {Observable, Subject} from 'rxjs'
import {map,take, takeUntil} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public unSubscriber$ = new Subject()
  constructor( private Angularfire: AngularFirestore,) {}

  public createWithId<T extends BaseDtoModule>(collection: string, data: T): Promise<void> {
    return this.Angularfire.doc<T>(`${collection}/${data.id}`).set(this.addcreatedAt(data));
  }

  public createWithvendor<T extends BaseDtoModule>(collection: string, id:string, data: T): Promise<void> {
    return this.Angularfire.doc<T>(`${collection}/${id}`).set(this.addcreatedAt(data));
  }

  public update<T extends BaseDtoModule>(collection: string, id: string, document: Partial<T>): Promise<void> {
    return this.Angularfire.doc<T>(`${collection}/${id}`).update(this.updateCreated(document));
  };

  public delete<T extends BaseDtoModule>(collection: string, id: string): Promise<any> {
    return this.Angularfire.doc<T>(`${collection}/${id}`).delete();
  }

  public findAlldr<T extends BaseDtoModule>(collection: string): Observable<T[]>{
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

  public getFuncOne(collection: string, id: string): Observable<any>{
    return new Observable((observer) => {
      return this.Angularfire.collection(collection).doc(id).get().pipe(takeUntil(this.unSubscriber$)).subscribe(data => {
        observer.next(data.data());
      }, err => {
        observer.error(err);
      })
    })
  }

  public getDataOnce(collection: string, querfn: QueryFn): Observable<any>{
    let query = this.Angularfire.collection(collection, querfn);
    return query.get().pipe(
      map(snapshot => {
        let items = [];
        snapshot.docs.map(a => {
          let data:Object = a.data();
          const id = a.id;
          items.push({ ...data, id })
        })
        return items;
      })
    );
  }
  
  public getdate(collections: string, qerfn: QueryFn):Observable<any>{
    return new Observable((observer) => {
      return this.Angularfire.collection(collections, qerfn).get().subscribe(value => {
        value.forEach(data => observer.next(data.data()));
      }, err => {
         observer.error(err);
      })
    })
  }

  addcreatedAt(data:any){
    return{
      ...data, createdAt: firebase.default.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.default.firestore.FieldValue.serverTimestamp()
    };
   }
   
   updateCreated(data:any){
    return{
      ...data, updatedAt: firebase.default.firestore.FieldValue.serverTimestamp()
    };
   }
}
