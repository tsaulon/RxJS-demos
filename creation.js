var rxjs_1 = require('rxjs');
var counter = 0;
var observable = rxjs_1.Observable.create(function (observer) {
    try {
        observer.next(counter);
        setTimeout(function () {
            observer.next(++counter);
            observer.complete();
        }, 2000); //  simulate API call
    }
    catch (e) {
        observer.error(e);
    }
});
var observer = observable.subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); }, function () { return console.log("Operations completed!"); });
