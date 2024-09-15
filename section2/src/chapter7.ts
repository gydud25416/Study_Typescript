//void
//void -> 공허 -> 아무것도 없다.
//void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

//never
//never -> 존재하지 않는
//불가능한 타입

function func3(): never {
    while (true) { } //무한으로 실행됨 
}

function func4(): never {
    throw new Error(); //실행되면 프로그램이 바로 중지됨
}

let anyVar:any;

let a:never;
// a = 1;
// a = {};
// a=- = "";
// a = undefined;
// a = null;
// a = anyVar;