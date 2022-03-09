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


// let sql = "SELECT student_id, mark FROM mark WHERE (student_id BETWEEN 1 AND 20) OR ( mark > 8 AND `date` BETWEEN '2021-01-01' AND '2021-12-31');";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("id y nota");
//         console.log(result);
//     }
// })

// let sql = "SELECT student_id, mark FROM mark WHERE (student_id BETWEEN 1 AND 20) OR ( mark > 8 AND `date` BETWEEN '2021-01-01' AND '2021-12-31');";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("id y nota");
//         console.log(result);
//     }
// })

// let sql = "SELECT subject_id, AVG(mark) AS nota_media FROM codenotch2.mark GROUP BY subject_id;";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("nota media por asignatura");
//         console.log(result);
//     }
// })

let sql = "SELECT student_id, AVG(mark) AS nota_media FROM codenotch2.mark WHERE `date` BETWEEN '2021-01-01' AND '2021-12-31' GROUP BY student_id; ";
conection.query(sql, function(error, result)
{
    if (error){
    console.log(error);
    }
    else
    {
        console.log("nota media alumnos 2021");
        console.log(result);
    }
})

conection.end();