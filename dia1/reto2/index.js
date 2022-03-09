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



// let sql = "INSERT INTO subject ( title) VALUES ( \"Conocimiento del medio\")";
// conection.query(sql, function(err, result)
// {

//     if (err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// }
// )

// let sql = "UPDATE `mark` SET `mark` = '0';";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("Dato cambiado");
//         console.log(result);
//     }
// })



// let sql = "SELECT `first_name`, `last_name` FROM `codenotch2`.`student`;";
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

let sql = "SELECT * FROM `codenotch2`.`teacher`;"
conection.query(sql, function(error, result)
{
    if (error){
    console.log(error);
    }
    else
    {
        console.log("Dato seleccionado");
        console.log(result);
    }
})
conection.end();

