const getAll = (req,res)=>{
res.json(tweets);
}
const getOne = (req,res)=>{
const id = parseInt(req.params.id);
const tweet = tweets.find(tweet=> tweet.id=== id);
res.json(tweet);
}
const createOne = (req,res)=>{
    tweets.push(req.body);
    res.json("le port viens d'etre creer");
}
const deleteOne = (req,res)=>{
    const id = parseInt(req.params.id);
    const index = tweets.findIndex(tweet=> tweet.id === id);
    tweet.splice(index, 1);
    res.json("le tweet a été supromé");
}



export {getAll,getOne,  createOne , updateOne, deleteOne}