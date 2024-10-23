const obj = {
  vorname: 'Alper',
  nachname: 'Korkmaz',
  gender: 1,
  age: 35,
  stadt: 'Euskirchen'
}

for (let prop in obj) {
  if(!obj.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${obj[prop]}`)
}