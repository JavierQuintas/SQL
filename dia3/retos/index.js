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


// let sql = "SELECT CONCAT(student.first_name, ' ', student.last_name) AS estudiante, `subject`.title AS asignatura FROM mark JOIN student ON mark.student_id = student.student_id JOIN `subject` ON mark.subject_id = `subject`.subject_id ORDER BY estudiante";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("nombres y asignatura");
//         console.log(result);
//     }
// })

// let sql = "SELECT CONCAT(teacher.first_name, ' ', teacher.last_name) AS profesor, `subject`.title AS asignatura FROM teacher JOIN subject_teacher ON teacher.teacher_id = subject_teacher.teacher_id JOIN `subject` ON subject_teacher.subject_id = `subject`.subject_id ORDER BY profesor";
// conection.query(sql, function(error, result)
// {
//     if (error){
//     console.log(error);
//     }
//     else
//     {
//         console.log("nombres y asignatura (profesores)");
//         console.log(result);
//     }
// })

let sql = "SELECT `subject` .title as asignatura, CONCAT(mark.student_id) AS num_alumnos, CONCAT( teacher.first_name,' ', teacher.last_name) AS profesor FROM mark JOIN `subject` ON mark.subject_id = `subject`.subject_id JOIN subject_teacher ON `subject`.subject_id = subject_teacher.subject_id JOIN teacher ON subject_teacher.teacher_id = teacher.teacher_id GROUP BY asignatura ORDER BY asignatura";
conection.query(sql, function(error, result)
{
    if (error){
    console.log(error);
    }
    else
    {
        console.log("reto3");
        console.log(result);
    }
})
conection.end();