const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    const id = req.query.id 

        try{
            const db = await Database
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends == "0") {
              orphanage.open_on_weekends = false;
            }else{
              orphanage.open_on_weekends = true;
            }
            
            return res.render('orphanage', { orphanage: orphanage })
        } catch(err){
            console.log(err)
            return res.send('Erro no banco de dados!!!')
        }

  },

  async orphanages(req,res){
    try{
      const db = await Database
      const orphanages = await db.all("SELECT * FROM orphanages")
      return res.render('orphanages', {orphanages: orphanages})
    }catch(err){
      console.log(err)
      return res.send('ERRO no banco de dados!')
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res){
    const fields = req.body

    //validar se todos os campos estao prenchidos
/*if(Object.values(fields).includes('')){
      return res.redirect('/create-orphanage')
    }
*/
    try{
      const db = await Database
      await saveOrphanage(db, {
      lat: fields.lat,
      lng: fields.lng,
      name: fields.name,
      about: fields.about,
      whatsapp: fields.whatsapp,
      images: fields.images.toString(),
      instructions: fields.lnstructions,
      opening_hours: fields.opening_hours,
      opening_on_weekends: fields.opening_on_weekends
    })

    return res.redirect('/orphanages')
    }catch(err){
      console.log(err)
      return res.send('Erro no banco de dados!!')
    }
  }
};

/*
 */
