import express from 'express';
import helmet from "helmet";

import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const app = express();
app.use(helmet());
const port = 3000; 

app.use(express.json());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, ()=>{
    console.log(`App is running on http://localhost:${port}`)
})
