import express from 'express';

const app = express();
const port = 3000; 

app.get('/', (req, res) => {
    res.status(statusCode.OK)
    res.send("Hello Assefa!")
});

app.listen(port, ()=>{
    console.log(`App is running on http://localhost:${port}`)
})
