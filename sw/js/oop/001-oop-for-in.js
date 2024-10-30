const obj = {
  vorname: 'Alper',
  nachname: 'Korkmaz',
  gender: 1,
  age: 35,
  stadt: 'Euskirchen',

  a:1,b:2,c:3,d:4
}

for (let index = 0; index < 100; index++) {
  for (let prop in obj) {
  if(!obj.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${obj[prop]}`)
  }
  console.log("======================");
}

 const o = { Apfel: 1, Xochitl: 2, Luftballon: 3, Gitarre: 4, xylophone: 5, };
 Object.keys(o)
 .filter(prop => prop.match(/^x/))
 .forEach(prop => console.log(`${prop}: ${o[prop]}`));