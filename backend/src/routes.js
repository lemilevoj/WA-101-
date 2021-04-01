
let home = (req, res) => res.send('Hello World, ovaj puta iz paketa!')
let datum = (req, res) => res.send("vrijeme")
let prognoza = (req, res) => res.send('Ruta za studente preko novog paketa.')
export default { home, datum, prognoza } 