const fn = require('./fn.js');

// test('1은 1이야', ()=>{
//     expect(1).toBe(1);
// });

// //toBe는 Matcher라고 부른다.
// //비슷한 toBe는 toEqual, toBeGreaterThan, toBeLessThan,
// //toBeGreaterThanOrEqual, toBeLessThanOrEqual,
// // toBeCloseTo, toBeDefined, toBeUndefined, toBeNull,
// // toBeTruthy, toBeFalsy, toBeNaN, toBeInstanceOf,
// // toHaveLength, toHaveProperty, toContain, toMatch 등이 있다.
// test('2 더하기 3은 5야', ()=>{
//     expect(fn.add(2,3)).toBe(5);
// })
// test('2 더하기 3은 5가 아니야 병시나', ()=>{
//     expect(fn.add(3,3)).not.toBe(5);
// })
// test("2 더하기 3은 5야.", () => {
//     expect(fn.add(2, 3)).toEqual(5);
// })


// //엄격한 비교를 한다.
// test("이름과 나이를 전달받아서 객체를 반환해줘123", () => {
//     expect(fn.makeUser("mike",30)).toStrictEqual({
//         name: "mike",
//         age: 30
//     });
// })

// //엄격하지않다. gender를 추가했는데 없어도 통과된다.
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//     expect(fn.makeUser("mike",30)).toEqual({
//         name: "mike",
//         age: 30
//     });
// })


// toBeNull 널인지 확인
//toBeUndefinded 언디파인드인지 확인
//toBeDefined 언디파인드가 아닌지 확인

// test("null 은 null 입니다.", () => {
//     expect(null).toBeNull();
// })


// // toBeTruthy 참인지 확인
// // toBeFalsy 거짓인지 확인

// test("0은 false 입니다.", () => {
//     expect(fn.add("hello","world")).toBeFalsy();
// })

// test("hello world는 트루씨 합니다.", () => {
//     expect(fn.add("hello","world")).toBeTruthy();
// })

//toBeGreaterThan 크다
//toBeGreaterThanOrEqual 크거나 같다
//toBeLessThan 작다
//toBeLessThanOrEqual 작거나 같다

// test("ID는 10자 이하여야 합니다.",() => {
//     const id = "THE_BLACK";
//     expect(id.length).toBeLessThanOrEqual(10);
// })

// test("2 더하기 3은 5보다 작습니다.", () => {
//     expect(fn.add(2,3)).toBeLessThan(5);
// }
// )

//  test("비밀번호 4자리", () => {
//     const pw = "1234"
//     expect(pw.length).toBe(4);
//  })

//  test("비밀번호 4자리", () => {
//     const pw = "1234"
//     expect(pw.length).toEqual(4);
//  })

//  test("비밀번호 4자리", () => {
//     const pw = "1234"
//     expect(pw.length).toStrictEqual(4);
//  })

 //자바스크립트는 소수계산을 정확하게 하지못한다.
 //2진법을 사용하기 때문에 그렇다. 소수를 2진법으로 바꾸면 무한소수가 나올때가있다.
 //이럴때는 toBeCloseTo를 사용한다.


//  test("0.1 더하기 0.2 는 0.3 입니다.", () => {
//     expect(fn.add(0.1,0.2)).toStrictEqual(0.3);
//  })

//  test("0.1 더하기 0.2 는 0.3 입니다.", () => {
//     expect(fn.add(0.1,0.2)).toBeCloseTo(0.3);
//  })

// test("Hello World 에 a 라는 글자가 있나?", () => {
//     expect("Hello World").toMatch(/a/);
// })


// test("Hello World 에 a 라는 글자가 있나?", () => {
//     expect("Hello World").toMatch(/d/i);
// })

// 정규표현식에 i를 붙이면 대소문자를 구분하지않는다.


// 배열을 검사할때는 toContain을 사용한다.
// test("유저리스트에 Mike가 있나?", ()=>{
//     const user = "Mike";
//     const userList = ["Tom","Jane","Mike"];
//     expect(userList).toContain(user);
// })



//toTHrow 는 에러를 검사할때 사용한다.
//특정 에러값인지 확인하고자 한다면 toThrow()안에 값을 넣어준다.
// test("이거 에러 나나요?", () => {
//     expect(( ) => fn.throwErr()).toThrow();

// });


//비동기 코드 테스트
//done 을 써서 비동기 코드를 테스트 할 수 있다.
//done을 넣으면 비동기 코드가 끝날때까지 기다렸다가 테스트를 진행한다.

// test("3초 후에 받아온 이름은 Mike",done => {
//     function callback(name){
//          expect(name).toBe("Mike");
//          done()
//     }
//    fn.getName(callback)
// })

//Promise를 사용한 비동기 코드 테스트
//resolve를 사용한 비동기 코드 테스트 
//reject 도 사용 가능하다. tmMatch를 사용하면 에러메세지를 검사할 수 있다.
// test("3초 후에 받아온 이름은 Mike", () => {
//     // return fn.getAge().then(Age => {
//     //     expect(Age).toBe(30);
//     // })

//     return  expect(fn.getAge()).resolves.toBe(30);
//     });

//async await를 사용한 비동기 코드 테스트
// test("3초 후에 받아온 이름은 Mike", async () => {
//     const age = await fn.getAge();
//     expect(age).toBe(30);
//     });

//beforeEach 는 각각의 테스트가 실행되기전에 실행된다.
// let num = 0;

//이렇게 해야 각각의 테스트가 실행될때 num이 재 할당되는것을 막을 수 있다.
// beforeEach(() => {
//     num = 0;
// })

//afterEach 는 각각의 테스트가 실행된 후에 실행된다.
// let num = 10;
// afterEach(() => {
//     num = 0;
// })

//  test("0 더하기 1 은 1 이야", () => {
//         num = fn.add(num,1);
//         expect(num).toBe(1);
//  })

//  test("0 더하기 2 은 2 이야", () => {
//     num = fn.add(num,2);
//     expect(num).toBe(2);
// })

// test("0 더하기 3 은 3 이야", () => {
//     num = fn.add(num,3);
//     expect(num).toBe(3);
// })

// test("0 더하기 4 은 4 이야", () => {
//     num = fn.add(num,4);
//     expect(num).toBe(4);
// })


//db를 사용하는 테스트를 할때는 beforeAll과 afterAll을 사용한다.
//아래의 예제는 db를 사용하는 테스트를 할때 시작전 연결 시작후 연결을 끊는다.
//아래와 같이 하게 될 경우 소요되는 시간이 길어지기 때문에 테스트가 느려진다.
//그래서 최초에 연결을 한번만 하고 최후에 연결을 끊는 방식을 해야한다.

// let user;

// beforeEach(async()=>{
//     user = await fn.connectUserDb();
// })
// afterEach(()=>{
//     return fn.disconnectDb
// })

// test("이름은 Mike", () => {
//     expect(user.name).toBe("Mike");
// })

// test("나이는 30", () => {
//     expect(user.age).toBe(30);
// })

// test("성별은 모름", () => {
//     expect(user.gender).toBe("undifined");
// })

//beforeAll과 afterAll을 사용하면 최초에 한번만 연결을 하고 최후에 한번만 연결을 끊는다.

// let user;

// beforeAll(async()=>{
//     user = await fn.connectUserDb();
// })
// afterAll(()=>{
//     return fn.disconnectDb
// })

// test("이름은 Mike", () => {
//     expect(user.name).toBe("Mike");
// })

// test("나이는 30", () => {
//     expect(user.age).toBe(30);
// })

// test("성별은 모름", () => {
//     expect(user.gender).toBe("undifined");
// })

//describe를 사용하면 테스트를 그룹화 할 수 있다.
//car 관련 작업 안에 해당 내용들이 들어가게 된다.


// describe("Car 관련 작업", () => {

//     let Car;

// beforeAll(async()=>{
//     Car = await fn.connectCarDb();
// })
// afterAll(()=>{
//     return fn.disconnectDb
// })

// test("이름은 z4", () => {
//     expect(Car.name).toBe("z4");
// })

// test("브랜드는 bmw", () => {
//     expect(Car.brand).toBe("BMW");
// })

// test("색상은 red", () => {
//     expect(Car.color).toBe("red");
// });

// });



// beforeAll(() => console.log("밖 beforeAll")) //1
// beforeEach(()=> console.log("밖 beforeEach")) //2 ,6
// afterEach(()=> console.log("밖 AfterEach")) //4 , 10
// afterAll(()=> console.log("밖 AfterAll")) // 마지막

// test("0 + 1 = 1",() => {
//     expect(fn.add(0,1)).toBe(1); // 3
// })

// describe("Car 관련 작업", () => {
//     beforeAll(() => console.log("안 beforeAll")) //5
//     beforeEach(()=> console.log("안 beforeEach"))// 7
//     afterEach(()=> console.log("안 AfterEach")) //9
//     afterAll(()=> console.log("안 AfterAll"))//마지막 -1

//     test("0 + 1 = 1",() => {
//         console.log("안 test")
//         expect(fn.add(0,1)).toBe(1); //8
//     })
// })

//only를 사용하면 해당 테스트만 실행이 된다.
//skip을 사용하면 해당 테스트를 실행하지 않는다.

// let num = 0

// test("0 더하기 1 은 1 이야", () => {
    
// expect(fn.add(num,1)).toBe(1);
// })

// test("0 더하기 2 은 2 이야", () => {
// expect(fn.add(num,2)).toBe(2);
// })

// test("0 더하기 3 은 3 이야", () => {
// expect(fn.add(num,3)).toBe(3);
// })

// test.skip("0 더하기 4 은 4 이야", () => {
// expect(fn.add(num,4)).toBe(4);
// num = 10;
// })

// test.only("0 더하기 5 은 5 이야", () => {
// expect(fn.add(num,5)).toBe(5);
// })

// mock function 을 사용하면 테스트를 할때 특정 함수를 테스트 하지 않고 테스트를 할 수 있다.


// const mockFn = jest.fn();


// mockFn();
// mockFn(1);

//calls로 알수있는것은 함수가 몇번 호출되었는지 알수있다.
//호출되었을때 전달된 인수는 무엇인가 알수있다.

// test('dd', ()=>{
//     console.log(mockFn.mock.calls)
//     expect('dd').toBe('dd');
// })

// test("함수는 2번 호출됩니다.", () => {
//     expect(mockFn.mock.calls.length).toBe(2);
// })

// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
//     expect(mockFn.mock.calls[1][0]).toBe(1);
//     console.log(mockFn.mock.calls)
// })

// function forEachAdd1(arr){
//     arr.forEach((num) => {
//         mockFn(num+1)
//     })
// }

// forEachAdd1([10,20,30])

// test("함수는 3번 호출됩니다.", () => {
//     expect(mockFn.mock.calls.length).toBe(3);
// })

// test("전달 된 값은 11, 21, 31 입니다.", () => {
//     expect(mockFn.mock.calls[0][0]).toBe(11);
//     expect(mockFn.mock.calls[1][0]).toBe(21);
//     expect(mockFn.mock.calls[2][0]).toBe(31);


    
// })

// const mockFn = jest.fn(num => num + 1);

// mockFn(10)
// mockFn(20)
// mockFn(30)

// test("함수 호출은 3번 됩니다.", () => {
//     console.log(mockFn.mock.results)
//     expect(mockFn.mock.calls.length).toBe(3);
// })

// test("10에서 1 증가한 값이 반환된다", () => {
//     expect(mockFn.mock.results[0].value).toBe(11);
// })

// test("20에서 1 증가한 값이 반환된다", () => {
//     expect(mockFn.mock.results[1].value).toBe(21);
// })

// test("30에서 1 증가한 값이 반환된다", () => {
//     expect(mockFn.mock.results[2].value).toBe(31);
// })


// const mockFn = jest.fn();

// mockFn
// .mockReturnValueOnce(10)
// .mockReturnValueOnce(20)
// .mockReturnValueOnce(30)
// .mockReturnValue(40)

// mockFn()
// mockFn()
// mockFn()
// mockFn()

// test("dd", () => {
//     console.log(mockFn.mock.results)
//     expect("dd").toBe("dd");
// });

// const mockFn = jest.fn();

// // [1,2,3,4,5].filter(num => callback(num));
// // [1,2,3,4,5].filter(num => mockFn(num));
// mockFn
// .mockReturnValueOnce(true)
// .mockReturnValueOnce(false)
// .mockReturnValueOnce(true)
// .mockReturnValueOnce(false)
// .mockReturnValue(true)

// const result = [1,2,3,4,5].filter(num => mockFn(num));

// test("홀수는 1,3,5", () => {
//     expect(result).toStrictEqual([1,3,5]);
// })

//resolve 를 사용하면 비동기함수를 흉내낼수도있따

// const mockFn = jest.fn();
// mockFn
// .mockResolvedValueOnce({name:"Mike"})


// test("받아온 이름은 Mike", () => {
//     mockFn().then(res => {
//         expect(res.name).toBe("Mike");
//     })
    
// })

// jest.mock('./fn');
// fn.createUser.mockReturnValue({name:"Mike"})



// test("유저를 만든다", () => {
//     const user = fn.createUser("Mike")
//     expect(user).toEqual({name:"Mike"})
// })

// const mockFn = jest.fn();

// mockFn(10,20)
// mockFn()
// mockFn(30,40)


// //toBeCalled는 함수가 호출되었는지 확인
// test("한번 이상 호출?", () => {
//     expect(mockFn).toBeCalled();
// })

// //toBeCalledTimes는 함수가 특정 횟수만큼 호출되었는지 확인
// test("특정 횟수만큼 호출?", () => {
//     expect(mockFn).toBeCalledTimes(3);
// })
// //toBeCalledWith는 함수가 특정 인수로 호출되었는지 확인
// test("특정 인수로 호출?", () => {
//     expect(mockFn).toBeCalledWith(30,40);
// })

// //lastCalledWith는 함수가 마지막으로 호출될 때 전달된 인수를 확인
// test("마지막으로 호출될 때 전달된 인수를 확인?", () => {
//     expect(mockFn).lastCalledWith(30,40);
// })



