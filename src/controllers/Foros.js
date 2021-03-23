const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = async (req, res) => {
    
    const juegos = db.collection('juego');
    const juego = await juegos.get();
        
    res.render('foros',{usuario: req.session.user_id, foroq: juego});
};


module.exports = controller;