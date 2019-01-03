import { Subject } from 'rxjs';

let subject = new Subject();

const firstSub = subject.subscribe(console.log);

subject.next("Hello,");
setTimeout(() => {
    subject.next("world!");
    firstSub.unsubscribe();
}, 2000);