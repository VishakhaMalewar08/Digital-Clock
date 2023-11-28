// const getTime =() =>{
//     let d=new Date();

//     let h=d.getHours();
//     let m=d.getMinutes();
//     let s=d.getSeconds();

//     return `${h} : ${m} : ${s}`;
// };
// setInterval(()=>{
//     // console.log(getTime());

//     let clock =document.querySelector(".clock");
//      clock.innerHTML = getTime();
// }, 1000);



const getTime = () => {
    let d = new Date();

    let h = d.getHours() % 12; // Adjust to 12-hour format
    h = h === 0 ? 12 : h; // If it's 0 (midnight), set it to 12
    let m = d.getMinutes();
    let s = d.getSeconds();

    return `${h} : ${m} : ${s}`;
};

setInterval(() => {
    let clock = document.querySelector(".clock");
    clock.innerHTML = getTime();
}, 1000);
