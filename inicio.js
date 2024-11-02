const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/portials');


app.get('/', (req, res) => {
  res.render('index',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
});

app.get('/portafolio', (req, res) => {
  res.render('portafolio',{
    nombre: "Karina Chumil",
    titulo: "Portafolio profesional /"
})
});

app.get('/SobreMI', (req, res) => {
  res.render('SobreMI',{
    nombre: "Karina Chumil",
    titulo: "Portafolio profesional /"
})
});

app.get('/reciente', (req, res) => {
    res.render('reciente',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

app.get('/analizador1', (req, res) => {
    res.render('analizador1',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

  app.get('/proyectoReciente', (req, res) => {
    res.render('proyectoReciente',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

  app.get('/carwindows', (req, res) => {
    res.render('carwindows',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

  app.get('/teorema', (req, res) => {
    res.render('teorema',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

  app.get('/proyectoR', (req, res) => {
    res.render('proyectoR',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

  app.get('/MRU-MRUV', (req, res) => {
    res.render('MRU-MRUV',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

  app.get('/tablas', (req, res) => {
    res.render('tablas',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

  app.get('/Ferreteria', (req, res) => {
    res.render('Ferreteria',{
      nombre: "Karina Chumil",
      titulo: "Portafolio profesional /"
  })
  });

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
  