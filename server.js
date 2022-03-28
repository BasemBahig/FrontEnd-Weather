const express = require('express');
const app = express();
const cors = require('cors');

app.use(express());
const port = 4040;

app.listen(port, (req,res)=>{
console.log(`server is up and runing on http://localhost:${port}`);
});

//export default app;