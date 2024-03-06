const authorController=require('../model/author.model');

module.exports.createAuthor=(request,response)=>{
    authorController.create(request.body)
        .then(newAuthor=>{
            response.json({author:newAuthor})
        })
        .catch(err=>response.status(400).json(err))
    
    
}

module.exports.getAuthor=(request,response)=>{
    authorController.find()
        .then(Author => {
            console.log(Author); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(Author);
        })
        .catch((err) => {
            response.json({ message: 'Something went wrong', error: err })
        });

    
}