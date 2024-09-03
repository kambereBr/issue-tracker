import fs from 'fs';
import path from 'path';
import { Issue, IssueData } from '../models/Issue';

const dataFilePath = path.join(__dirname, '../../data/issues.json');

const initialData: IssueData[] = [
  { id: 1, title: 'Sample Issue 1', description: 'Description for issue 1' },
  { id: 2, title: 'Sample Issue 2', description: 'Description for issue 2' },
];

beforeEach(() => {
  fs.writeFileSync(dataFilePath, JSON.stringify(initialData, null, 2), 'utf-8');
});

afterAll(() => {
  fs.writeFileSync(dataFilePath, JSON.stringify(initialData, null, 2), 'utf-8');
});

describe('Issue Model', () => {
  it('should get all issues', () => {
    const issues = Issue.getAll();
    expect(issues).toHaveLength(2);
    expect(issues[0].title).toBe('Sample Issue 1');
  });

  it('should create a new issue', () => {
    const newIssue = Issue.create('New Issue', 'New issue description');
    expect(newIssue).toMatchObject({
      id: expect.any(Number),
      title: 'New Issue',
      description: 'New issue description'
    });

    const issues = Issue.getAll();
    expect(issues).toHaveLength(3);
  });

  it('should update an existing issue', () => {
    const updatedIssue = Issue.update(1, 'Updated Issue', 'Updated description');
    expect(updatedIssue).toMatchObject({
      id: 1,
      title: 'Updated Issue',
      description: 'Updated description'
    });

    const issues = Issue.getAll();
    expect(issues[0].title).toBe('Updated Issue');
  });

  it('should delete an issue', () => {
    const success = Issue.delete(1);
    expect(success).toBe(true);

    const issues = Issue.getAll();
    expect(issues).toHaveLength(1);
  });
});
