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
    urlDB = "mongodb://localhost:27017/cocoa";
} else {
    urlDB = "mongodb+srv://cocoa-user:y5F6n55CCW9strLZ@cluster0.3ub6d.mongodb.net/cocoa"
}

process.env.URLDB = urlDB;