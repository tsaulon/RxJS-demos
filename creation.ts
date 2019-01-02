import { Observable } from 'rxjs';

let counter = 0;
let observable = Observable.create((observer: any) => {
    try {
        observer.next(counter)
        setTimeout(() => {
            observer.next(++counter);
            observer.complete();
        }, 2000);   //  simulate API call

        //  throw "Error!";
    } catch (e) {
        observer.error(e);
    }

});

let observer = observable.subscribe(
    data => console.log(data),
    error => console.error(error),
    () => console.log("Operations completed!")
);

