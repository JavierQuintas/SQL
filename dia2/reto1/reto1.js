const mysql = require("mysql2");


const conection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "codenotch2"
    });

conection.connect(function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log('conexion correcta.');
    }
});

// let sql = "SELECT subject_id, AVG(mark) FROM codenotch2.mark where subject_id = 1";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("Notas cambiadas");
//         console.log(result);
//     }
// })

// let sql = "SELECT count(*) AS total_alumnos FROM codenotch2.student";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("Notas cambiadas");
//         console.log(result);
//     }
// })


// let sql = "SELECT * FROM codenotch2.group";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("Notas cambiadas");
//         console.log(result);
//     }
// })


// let sql = "DELETE FROM codenotch2.mark WHERE mark > 5 AND (`date` >= '2021-01-01' AND `date` <= '2021-12-31');";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("Notas cambiadas");
//         console.log(result);
//     }
// })

let sql = "SELECT * FROM codenotch2.student WHERE entry_year = 2022;";
conection.query(sql, function(error, result)
{
    if (error){
    console.log(error);
    }
    else
    {
        console.log("Estudiantes que ingresan en 2022");
        console.log(result);
    }
})
conection.end();