var rxjs_1 = require('rxjs');
//  Hot Observables are observables where data is created outside the observable
var number = Math.random();
var hot = rxjs_1.Observable.create(function (observer) { return observer.next(number); });
var firstSub = hot.subscribe(console.log);
var secondSub = hot.subscribe(console.log);
