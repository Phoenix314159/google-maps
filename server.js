const express = require('express'),
    app = express(),
    path = require('path'),
    port = 3004;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.status(200).send('hey man');
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


