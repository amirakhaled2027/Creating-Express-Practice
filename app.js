// const express = require('express')
// const app = express;

// app.listen(8000)


// const express = require('express')
// const app = express;

// app.listen(8000)


// const express =require(express);
// const app = express;

// app.listen(8000)



const express = require('express');
const app = express;

app.get('/address', function(req, res) {
    res.send('hello from the other side, Adele')
})

app.listen(8000)