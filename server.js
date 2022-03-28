import {express, req, res} from 'express'
import cors from 'cors';
const app = express();
app.use(corse());
const port = 4040;

app.listening(port, (req,res)=>{
console.log(`server is up and runing on localhost:${port}`);
});

export default app;