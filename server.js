const express = require('express'),
    app = express(),
    path = require('path'),
    port = 3011;

app.use('/', express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


