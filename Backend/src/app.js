const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const dns = require("dns");
const app  = express();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://ai-powered-mood-music-player.onrender.com"
    ],
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());

const authRoutes = require('./routes/auth.routes')
const songRoutes = require('./routes/song.routes')

app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);

app.use(express.static(path.join(__dirname,'../public')))

app.get("/{*splat}",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

module.exports = app