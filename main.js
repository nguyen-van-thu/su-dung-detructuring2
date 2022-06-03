// let profile = {
//     fname: 'Code',
//     lname: 'Gym',
//     bday: new Date('13-08-1992')
// }
// let fname = profile.fname;
// let lname = profile.lname;
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// console.log(fname,lname);
var _a = { fname: 'Code',
    lname: 'Gym',
    bday: new Date + '13-08-1992' }, fname = _a.fname, lname = _a.lname, bday = __rest(_a, ["fname", "lname"]);
console.log(fname, lname, bday);
