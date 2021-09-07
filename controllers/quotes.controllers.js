const path = require('path')
const fs = require('fs');
const DB_PATH = path.join(__dirname + '/../data/db.json')
let db = require(DB_PATH);



function render(file,res){
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`))
}






class QuotesController {

    
    
    async index(req,res){
        return render("quotes",res);
        
    }


}


module.exports = new QuotesController();

