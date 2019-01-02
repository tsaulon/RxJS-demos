import { Observable } from 'rxjs';

//  Cold Observables are observables where data is created inside the observable
let cold = Observable.create(observer => observer.next(Math.random()));

let firstSub = cold.subscribe(console.log);
let secondSub = cold.subscribe(console.log);