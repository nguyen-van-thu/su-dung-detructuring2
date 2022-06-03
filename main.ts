// let profile = {
//     fname: 'Code',
//     lname: 'Gym',
//     bday: new Date('13-08-1992')
// }
// let fname = profile.fname;
// let lname = profile.lname;


// console.log(fname,lname);
let {fname,lname,...bday} = {fname: 'Code',
    lname: 'Gym',
    bday: new Date +'13-08-1992'}
console.log(fname,lname,bday)