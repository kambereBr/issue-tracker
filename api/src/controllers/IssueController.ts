import { Request, Response } from 'express';
import { Issue } from '../models/Issue';

export const getAllIssues = (req: Request, res: Response) => {
  try {
    const issues = Issue.getAll();
    res.json(issues);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createIssue = (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newIssue = Issue.create(title, description);
    res.status(201).json(newIssue);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateIssue = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    const updatedIssue = Issue.update(id, title, description);
    if (updatedIssue) {
      res.json(updatedIssue);
    } else {
      res.status(404).json({ error: 'Issue not found.' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteIssue = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const success = Issue.delete(id);
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Issue not found.' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
