const create = (req, res) => {

  const {name,username,email,passworld,avatar} = req.body;

  if(!name || !username || !email || !passworld || !avatar){
         
    res.status(400).json('erro ao cadastrar')
  }


  res.status(201).json({
    messagem:"create usuário",
    user:{name, 
      username,
      email,
      passworld,
      avatar
  }});
};

module.exports = { create };
