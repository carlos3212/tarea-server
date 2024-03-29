// ===========================================
//  Puerto
// ===========================================
process.env.PORT = process.env.PORT || 3000;

// ===========================================
//  Entorno
// ===========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

// ===========================================
//  Base de Datos
// ===========================================

let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = "mongodb+srv://cocoa:Programar.1234@cluster0.azijh.mongodb.net/cocoa"
    //"mongodb://localhost:3000/cocoa";
} else {
    urlDB = "mongodb+srv://cocoa:Programar.1234@cluster0.azijh.mongodb.net/cocoa"
}

process.env.URLDB = urlDB;