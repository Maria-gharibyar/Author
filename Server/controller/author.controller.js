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
module.exports.findAndUpdateAuthor=(request,response)=>{
        authorController.findOneAndUpdate({_id: request.params.id},request.body,{new:true})
        .then(updateAuthor=>response.json(updateAuthor))
        .catch(err=>response.status(400).json(err))
}
module.exports.getOne=(request,response)=>{
    authorController.findOne({_id: request.params.id})
    .then(getOneAuthor=>response.json(getOneAuthor))
    .catch(err=>response.status(400).json(err))
}
module.exports.deleteAuthor=(request,response)=>{
    authorController.deleteOne({_id:request.params.id})
    .then(deleteAuthor=>response.json(deleteAuthor))
    .catch(err => response.json(err))
}