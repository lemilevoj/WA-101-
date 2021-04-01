import express from 'express';
import routes from './routes'; 
import moment from 'moment'
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
app.get('/', routes.home)
app.get('/datum', routes.datum)
app.get('/prognoza', routes.prognoza)
app.listen(port, () => console.log(`Slušam na portu ${port}!`))
//Datum

let vrijeme=moment().format("DD.MM.YYYY, HH:mm");
console.log(vrijeme);


let prognoza = ['sunčano', 'kišovito', 'oblačno'];
let pomocni = prognoza[Math.floor(Math.random()*prognoza.length)];
console.log('Danas će biti ' + pomocni);