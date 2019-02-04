var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath : 'https://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn.jpg',
        title : 'Fornite Multi Player Game',
        description : 'A multiplayer video game is a video game in which more than one person can play in the same game environment at the same time, either locally or over the internet.',
        price : 10
    }),
    new Product({
        imagePath : 'https://images.g2a.com/newlayout/323x433/1x1x0/0017f67ada95/59e60aeaae653a34fe0e9633',
        title : 'Pubg Multi Player Game',
        description : 'A multiplayer video game is a video game in which more than one person can play in the same game environment at the same time, either locally or over the internet.',
        price : 10
    }),
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/d/d4/Call_of_Duty_-_Modern_Warfare_Remastered.jpeg',
        title : 'Call of Duty 4',
        description : 'A multiplayer video game is a video game in which more than one person can play in the same game environment at the same time, either locally or over the internet.',
        price : 10
    }),
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Battlefield_1_cover_art.jpg/220px-Battlefield_1_cover_art.jpg',
        title : 'BattleField 1',
        description : 'A multiplayer video game is a video game in which more than one person can play in the same game environment at the same time, either locally or over the internet.',
        price : 10
    }),
    new Product({
        imagePath : 'https://images-na.ssl-images-amazon.com/images/I/51lc2PtZFRL.jpg',
        title : 'Mortal Kombat X',
        description : 'A multiplayer video game is a video game in which more than one person can play in the same game environment at the same time, either locally or over the internet.',
        price : 10
    }),
    new Product({
        imagePath : 'https://is3-ssl.mzstatic.com/image/thumb/Video/v4/68/00/fc/6800fcbd-36af-3521-a8c0-c0c8cf9e2615/mza_3459262736716375649.jpg/268x0w.jpg',
        title : 'HALO 4',
        description : 'A multiplayer video game is a video game in which more than one person can play in the same game environment at the same time, either locally or over the internet.',
        price : 10
    }),
]

var done = 0;
for( var i = 0 ; i < products.length; i++){
    products[i].save(function(err , result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    try{
        mongoose.disconnect();
    }catch{
        console.log("Promise Rejected");
    }
}
