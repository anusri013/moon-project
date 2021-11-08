const companies = [
    {name:'Company One',category:'Finance',start:1981,end:2003},
    {name:'Company Two',category:'Retail',start:1992,end:2008},
    {name:'Company Three',category:'Auto',start:1999,end:2007},
    {name:'Company Four',category:'Retail',start:1989,end:2010},
    {name:'Company Five',category:'Technology',start:2009,end:2014},
    {name:'Company Six',category:'Finance',start:1987,end:2010},
    {name:'Company Seven',category:'Auto',start:1986,end:1996},
    {name:'Company Eight',category:'Technology',start:2011,end:2016},
    {name:'Company Nine',category:'Retail',start:1981,end:1989},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//  foreach  no return back; just to loop data

// for (let i=0; i< companies.length;i++){
//     console.log(companies[i]);
// }

// companies.forEach((cmpn)=> {console.log(cmpn)}); // It can also take the whole array along with the indices inside the loop

// filter

let canDrink = [];
for( let i=0; i<ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i])
    }
}

const canDrinks = ages.filter((aggg) => {if (aggg > 21) return true});
console.log(canDrinks);
const rcs = companies.filter(cmpn =>  cmpn.category === 'Retail');
console.log(rcs);
const rc = companies.filter(function(cmpn) {if(cmpn.category === 'Retail'){return true} });
// console.log(rc);
const et = companies.filter((cmpn) => cmpn.start < 1990 && cmpn.start > 1979);
// console.log(et);
const lt = companies.filter((cmpn) => cmpn.end - cmpn.start >=10);
// console.log(lt);

// map
// Create array of company names
const cn = companies.map((cmpn) => cmpn.name);
// console.log(cn);
const test = companies.map((cmpn) => `${cmpn.name} [${cmpn.start} - ${cmpn.end}]`);
const tests = companies.map(function (cmpn) {
    return `${cmpn.name} [${cmpn.start}-${cmpn.end}]` ;   
})
 console.log(test);


const sr = ages.map((aggg) => Math.sqrt(aggg));
console.log(sr)
const m2 = ages.map(function (aggg) {
    return `${aggg*2} , ${aggg}`; 
});

// If we want first square root and then making twice then::::-----
const srm2 = ages.map((aggg) => Math.sqrt(aggg)).map((aggg) => aggg*2);
// console.log(srm2);
// We can do several math operations on a single array by adding mutiple maps

// sort  change 1 and -1 as per the ascending and descending order 
const sc = companies.sort(function (c1 , c2 ) {
    if(c1.start > c2.start){
        return -1;
    }
    else{
        return 1;
    } 
});
const scs = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(scs);

// Sort ages
const sa = ages.sort((a, b) => a - b);
const sas = ages.sort((a, b) => b - a);
// console.log(`${ages.sort((a, b) => a - b)} ${ages.sort((a, b) => b - a)}`);
console.log(sas);

// reduce
let aagg  = 0;
for (let i =0; i<ages.length; i++){
    aagg+=ages[i]
};

const aaggs = ages.reduce(function (total,aggg) {
   return total+aggg
},0); 

const aaggss = ages.reduce((total,aggg) => total+aggg ,0);
console.log(aaggss);

const trc = companies.reduce((total,cmpn) => total+(cmpn.end-cmpn.start), 0);
console.log(trc);

// Combine methods

const cmbnd = ages
.map(agg => agg*2)
.filter(agg => agg>=40)
.sort((a,b) => a-b)
.reduce((a,b) => a+b,0);

console.log(cmbnd);

