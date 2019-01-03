var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
//  Hot Observables are observables where data is created outside the observable
//  let number = Math.random();
var cold = rxjs_1.Observable.create(function (observer) { return observer.next(Math.random()); });
var hot = cold.pipe(operators_1.publish()); //  emit data when .connect() is invoked
var firstSub = hot.subscribe(console.log);
var secondSub = hot.subscribe(console.log);
hot.connect(); //  invoke to emit data
firstSub.unsubscribe();
secondSub.unsubscribe();
