import express from 'express';
import cors from 'cors';
import { StreamChat } from 'stream-chat';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const app = express();

app.use(cors());
app.use(express.json());

const api_key = 'cphv78cdm95v';
const api_secret =
  'ne9qhss5gtvzhds5q6exfxqaar3vc8cxps3fz2u4v84j79pcba7dfmdc9965xv2w';

const serverClient = StreamChat.getInstance(api_key, api_secret);

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createToken(userId);
    res.json({ token, userId, firstName, lastName, username, hashedPassword });
  } catch (error) {
    res.json(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { users } = await serverClient.queryUsers({ name: username });
    if (users.length) return res.json({ message: 'User not found' });

    const passwordMatch = await bcrypt.compare(
      password,
      users[0].hashedPassword
    );

    if (passwordMatch) {
      res.json({
        token,
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        username,
        userId: users[0].userId,
      });
    }
  } catch (error) {
    res.json(error);
  }
});

app.listen(3001, () => {
  console.log('server is running on port 3001');
});
