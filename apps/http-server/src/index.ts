import express from 'express';
import { client } from '@repo/db/client';

const app: express.Express = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from HTTP Server!' });
})

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data: {
            username,
            password
        }
    });

    res.json({
        message: `User ${username} signed up successfully!`,
        user: {
            id: user.id,
            username,
            password // In a real application, never send passwords back in responses
        }
    })
})


app.listen(3002, () => {
    console.log('HTTP Server is running on http://localhost:3002');
});

export default app;