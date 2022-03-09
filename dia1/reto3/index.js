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





// let sql = "DELETE FROM codenotch2.mark WHERE `date` < '2012-03-07';";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("Dato seleccionado");
//         console.log(result);
//     }
// })


let sql = "UPDATE `codenotch2`.`mark` SET `mark` = '5' WHERE mark < '5';";
conection.query(sql, function(error, result)
{
    if (error){
    console.log(error);
    }
    else
    {
        console.log("Notas cambiadas");
        console.log(result);
    }
})


conection.end();