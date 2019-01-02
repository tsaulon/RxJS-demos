import { Observable } from 'rxjs';

//  Hot Observables are observables where data is created outside the observable
let number = Math.random();
let hot = Observable.create(observer => observer.next(number));

let firstSub = hot.subscribe(console.log);
let secondSub = hot.subscribe(console.log);