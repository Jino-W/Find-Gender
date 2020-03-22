var request = require('request');


module.exports.show =(req,res)=>{
    if(req.query.name){
        request(`https://gender-api.com/get?name=${req.query.name}&key=pRPLCejozFwCHFbVCR`,{json:true}, function (error, response, body) {
            if(response.statusCode == 200){
                const gender = body.gender
                res.send(gender)
            }else{
                res.send(error)
            }
        })
    }else{
        res.json('name is not specified')
    }
}




// req.query = {
//     name: jino
// }