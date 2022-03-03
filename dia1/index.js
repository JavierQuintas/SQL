let mysql = require("mysql2");


let conection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "Codenotch"
    });

conection.connect(function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log('conexion correcta.');
    }
});

// // Añadir columna a la tabla de profesor

// let sql = "ALTER TABLE `codenotch`.`profesor` ADD COLUMN `experiencia(años)` INT NULL AFTER `telefono`;"

// conection.query(sql, (error, result) => {
//     if (!error) {
//         console.log("Se ha añadido la columna 'experiencia(años)' a la tabla de 'profesor'");
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })

// // Añadir columna a la tabla de profesor

// let sql = "ALTER TABLE `codenotch`.`asignatura` DROP COLUMN `dia`;"

// conection.query(sql, (error, result) => {
//     if (!error) {
//         console.log("Se ha borrado la columna 'dia' de la tabla 'asignatura' de la base de datos de Codenotch");
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })


// eliminar tabla asignatura

let sql = "DROP TABLE `codenotch`.`asignatura`;"

conection.query(sql, (error, result) => {
    if (!error) {
        console.log("Se ha borrado la tabla 'asignatura' de la Base de Datos de Codenotch");
        console.log(result);
    }else (
        console.log(error)
    )
})