// Process -> Objeto global que corre a lo largo de la aplicacion de node

/* ================ PUERTO ================ */
process.env.PORT = process.env.PORT || 3000;

/* ================ ENTORNO ================ */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; // Si esta variable no existe suponemos que estamos en desarrollo

/* ================ VENCIMIENTO TOKEN ================ */
/* 60 SEGUNDOS - 60 MINUTOS - 24 HORAS - 30 DIAS */
process.env.CADUCIDAD_TOKEN = '48h';

/* ================ SEMILLA DE AUTENTICACION TOKEN ================ */
/* EL SEED SERA UNA VARIABLE DE ENTORNO DE HEROKU POR SEGURIDAD */
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'este-es-el-seed-desarrollo';

/* ================ BASE DE DATOS ================ */
let urlDB;

if( process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    /* USAMOS LA VARIABLE DE ENTORNO QUE CONFIGURAMOS EN HEROKU */
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/* ================ GOOGLE CLIENT ID ================ */
process.env.CLIENT_ID = process.env.CLIENT_ID || '394679815856-3vtfkoa4ne24r4vd58deh7liem7s3crj.apps.googleusercontent.com';

/* ================ BD LOCAL ================ */
//mongodb://localhost:27017/cafe

/* ================ BD MONGO ATLAS ================ */
//mongodb+srv://<username>:<password>@cafe-lmcjb.mongodb.net/test