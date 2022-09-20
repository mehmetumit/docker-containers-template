const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('NodeJS')
})
app.listen(80, () => console.log('NodeJS running on 80'));
