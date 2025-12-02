// // // // const age =  {
// // // //     years: 19
// // // // }

// // // // age.years = 20;

// // // // console.log(age.years);

// // // // object literals 
// // // const keyname = "name"
// // // const product = {
// // //     keyname : 'mobile',
// // //     [keyname] : "ye kya hai"

// // // }

// // //destructuring 

// const user = {
//     name : "bob",
//     age: 420
// }


// // console.log(user.age);

// const {name : fullname , age} = user;
// console.log(fullname);



// //array ? 

// const hh = [1,2,3,4,5,6,8,9,5,3,3,5,5];

// const [n, t, j, kk, kl] = hh;

// console.log(kl);
// // so cool 

// const [name, age , profession] = ["swastik", 20, "ngneer"]

// console.log(name + "\n" + age); // okay /n was wrong to write cool

// react ka use state yaad hai wahi hai 


//spread the chaos ....

// const lang = ["c", "c++", "pypy", "js", "ts", "pydantic", "etc"]

// //for loop copy krao

// // const copyLang = ["bhai++", ...lang]
// const copyLang = [ ...lang, "bhai++",]


// console.log(lang);
// console.log(copyLang);
// awesome

/// refrence ka maamla

// const setting = {
//     hue: 10,
//     gamma: 20,

//     brightness: {
//         rgb: "#f72"
//     }
// }

// const newSetting = setting;

// // naya maamla try krte chlo

// const newSetting = {...setting, contrast: 50, gamma: 35} // shallow copy iske andar ka object still
// //  mem ref point krega brightness one

// newSetting.hue =  18;

// // console.log(setting.hue); // tf 18 kese

// console.log(newSetting);

// //rest same nhi hai 

// const addItems = (...items) => {
//     console.log(items);    
// }

// addItems(10,2093,38302,2802); //array bn jayega inka rest use krke





const person = {
    name: "swastik",
    age: 20,
    brand: 'google'
}

for (const [pers, persVal] of Object.entries(person)) {
    console.log(pers,persVal); 
}








