import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getAllIssues, createIssue, updateIssue, deleteIssue } from './controllers/IssueController';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/issues', getAllIssues);
app.post('/issues', createIssue);
app.put('/issues/:id', updateIssue);
app.delete('/issues/:id', deleteIssue);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
