import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.get('/api/image/random', async (req, res) => {
    try {
        async function fetched() {
            const response = await axios.get('https://randomuser.me/api/');
            const data = response.data.results[0].picture.large;
            return data;
        }

        const img = await fetched();
        res.json({
            message: "success",
            image: img,
        });
    } catch (error) {
        console.error(`Error fetching random image: ${error.message}`);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
