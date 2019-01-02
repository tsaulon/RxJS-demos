var rxjs_1 = require('rxjs');
//  Cold Observables are observables where data is created inside the observable
var cold = rxjs_1.Observable.create(function (observer) { return observer.next(Math.random()); });
var firstSub = cold.subscribe(console.log);
var secondSub = cold.subscribe(console.log);
