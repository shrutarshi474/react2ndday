var mysql = require('mysql');

function Db_con(){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "27/4/2002"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

}

export default Db_con;


