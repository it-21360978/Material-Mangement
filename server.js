const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./src/Utility/db');
const modelRouter = require('./src/Routes/routes');



const app = express();



const port = process.env.PORT || 3030;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/study',modelRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/speech-to-text", async (req, res) => {
    try {
        const fileName = "YourAudioFile.wav";
        const recognizedText = await recognizeSpeechFromFile(fileName);
        res.json({ text: recognizedText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
   
});



