import express from 'express';
import helmet from "helmet";
import { rateLimit } from 'express-rate-limit';

import mainRoutes from './main.routes';
import userRoutes from './user.routes';
import compression from 'compression';

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)
app.use(compression());
const app = express();
app.use(helmet());
const port = 3000; 

app.use(express.json());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, ()=>{
    console.log(`App is running on http://localhost:${port}`)
})
