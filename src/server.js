import express from 'express';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';

import indexRouter from './routes/indexRouter';
import beaversRouter from './routes/beaversRouter';
import apiRouter from './routes/apiRouter';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import postsRouter from './routes/postsRouter';
import { authMiddleware, pathMiddleware } from './middlewares';
import jsxRender from './utils/jsxRender';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

const FileStore = store(session);

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(pathMiddleware);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'beavers forever', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.use(authMiddleware);

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/beavers', beaversRouter);
app.use('/api/auth', authRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
