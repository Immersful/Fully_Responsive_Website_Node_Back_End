var express = require("express"),
    app     = express();
    
app.use(express.static("public"));
app.set("view engine", "ejs");
    
app.get("/", function(req, res) {
   res.render("Index"); 
});

app.get("/About", function(req, res){
   res.render("About");
});

app.get("/Contact", function(req, res){
  res.render("Contact");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server have started");
});