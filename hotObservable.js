var rxjs_1 = require('rxjs');
var observable = rxjs_1.Observable.create(function (observer) { return observer.next("hello"); });
var subscription = observable.subscribe(console.log);
