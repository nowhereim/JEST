// // const fn = {
// //     add: (num1, num2) => num1 + num2,
// //     makeUser : (name, age) => ({name, age,gender : undefined}),
// //     throwErr : () => {throw new Error("xx")},

// // }

// // const fn = {
// //     add: (num1, num2) => num1 + num2,
// //    getName: callback => {
// //     const name = "Mike";
// //     setTimeout(() => {
// //         callback(name);
// //     },3000)
// //    }
// // }

// // const fn = {
// //     add: (num1, num2) => num1 + num2,
// //    getName: callback => {
// //     const name = "Mike";
// //     setTimeout(() => {
// //         callback(name);
// //     },3000);
// //     },
// //     getAge :()=> {
// //         const age = 30;
// //         return new Promise((res,rej) => {
// //             setTimeout(() => {
// //                 res(age);
// //             },3000)
// //         })
// //     }
// // };

// const fn = {

//     createUser : () => {
//         console.log('실제로 사용자가 생성되었습니다.')
//         return {
//             name : 'Mike',
//         }
//     },
//     add: (num1, num2) => num1 + num2,
//     connectUserDb: () => {
//         return new Promise(res => {
//             setTimeout(() => {
//                         res({
//                             name: "Mike",
//                             age: 30,
//                             gender : "undifined"
//                         })
//                 } , 500);
//         })
        
//     },
//     disconnectDb: () => {
//         return new Promise(res => {
//             setTimeout(() => {
//                 res();
//             }, 500);
//         })
//     },
//     connectCarDb: () => {
//         return new Promise(res => {
//             setTimeout(() => {
//                 res({
//                     brand: "BMW",
//                     name : "z4",
//                     color : "red"
//                 });
//             }, 500);
//         })
//     },
//     disconnectCarDb: () => {
//         return new Promise(res => {
//             setTimeout(() => {
//                 res();
//             }, 500);
//         })
//     },

// };


// //db에 연결해서 데이터를 가져오는 시간을 가장한 코드

// module.exports = fn;