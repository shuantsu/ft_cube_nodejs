//var path = require('path');

var express = require('express');

const app = express();

const PORT = 3000;

//var dir = path.join(__dirname, 'public');

//app.use(express.static(dir));

app.get('/', (req, res) => {
    res.contentType('image/png');
    res.send(makeImg(req.query.alg,req.query.cubesize,req.query.bgcolor));
    //res.send('<img src="image.png"/>');
});

function makeImg(alg="", cubeSize=3, bgColor=null) {
    const { createCanvas } = require("canvas");
    const renderAlg = require("./Renderer.js");
    
    const width = height = 1200;
    
    const canvas = createCanvas(width, height);
    
    renderAlg(alg, cubeSize, canvas, [width, null], bgColor);
    
    const buffer = canvas.toBuffer("image/png");
    
    return buffer;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});