import { Observable } from 'rxjs';
import { publish } from 'rxjs/operators';

//  Hot Observables are observables where data is created outside the observable
//  let number = Math.random();
let cold = Observable.create(observer => observer.next(Math.random()));
let hot = cold.pipe(publish()); //  emit data when .connect() is invoked

let firstSub = hot.subscribe(console.log);
let secondSub = hot.subscribe(console.log); 

hot.connect();  //  invoke to emit data

firstSub.unsubscribe();
secondSub.unsubscribe();