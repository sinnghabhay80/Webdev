var express = require('express');
var bodyparser = require('body-parser');
var urlencoder = bodyparser.urlencoded({extended:true});
var app = express();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kinngarjun1@",
    database: "web"
});

app.post('/',urlencoder,function(req,res,document)
{  
    var s="";
    alert ( document.getElementById("usersign").value + document.getElementById("passwsign").value);
    s="insert into logindetails values('" + document.getElementById("usersign").value + "','" + document.getElementById("passwsign").value + "');";
    con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query(s, function (err,result) {
    if(err) throw err;
    console.log("Record Inserted");
});
});
});