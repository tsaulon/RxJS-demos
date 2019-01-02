import { Observable } from 'rxjs';

let observable = Observable.create(observer => observer.next("hello"));

let subscription = observable.subscribe(console.log);