import express from 'express';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
import configCors from './config/cors';
import cookieParser from 'cookie-parser';
import setupStudentStatusWebSocket from './websocket/wsStudentStatusServer'; // WS server for student status
import http from 'http';
import botTelegram from './bot/botTelegram';

const app = express();
configCors(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// botTelegram(app).catch((error) => {
//     console.error("Failed to initialize bot:", error);
// });

const server = http.createServer(app);
// Uncomment if using WebSocket servers
// setupChatWebSocket(server, '/ws/chat');
setupStudentStatusWebSocket(server, '/ws/student-status');

initWebRoutes(app);


app.use((req, res) => {
    return res.status(404).send("404 Not Found");
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    const address = server.address();
    console.log('check address.address ', address.address )
    const host = address.address === '::' ? '127.0.0.1' : address.address;
    const protocol = 'http';

    console.log(`Server is running on ${protocol}://${host}:${PORT}`);
    console.log('Server details:', address);
});
