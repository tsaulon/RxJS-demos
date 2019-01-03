var rxjs_1 = require('rxjs');
var subject = new rxjs_1.Subject();
var firstSub = subject.subscribe(console.log);
subject.next("Hello,");
setTimeout(function () {
    subject.next("world!");
    firstSub.unsubscribe();
}, 2000);
