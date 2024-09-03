import fs from 'fs';
import path from 'path';

export interface IssueData {
  id: number;
  title: string;
  description: string;
}

const dataFilePath = path.join(__dirname, '../../data/issues.json');

export class Issue {
  private static readData(): IssueData[] {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(data) as IssueData[];
    } catch (error) {
      console.error('Error reading data file:', error);
      return [];
    }
  }

  private static writeData(issues: IssueData[]): void {
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(issues, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error writing to data file:', error);
    }
  }

  static getAll(): IssueData[] {
    return this.readData();
  }

  static create(title: string, description: string): IssueData {
    if (!title || !description) {
      throw new Error('Title and description are required.');
    }

    const issues = this.readData();
    const newIssue: IssueData = {
      id: issues.length ? issues[issues.length - 1].id + 1 : 1,
      title,
      description
    };

    issues.push(newIssue);
    this.writeData(issues);
    return newIssue;
  }

  static update(id: number, title?: string, description?: string): IssueData | null {
    const issues = this.readData();
    const issue = issues.find(issue => issue.id === id);
    if (!issue) {
      return null;
    }

    if (title) issue.title = title;
    if (description) issue.description = description;

    this.writeData(issues);
    return issue;
  }

  static delete(id: number): boolean {
    const issues = this.readData();
    const index = issues.findIndex(issue => issue.id === id);
    if (index === -1) {
      return false;
    }

    issues.splice(index, 1);
    this.writeData(issues);
    return true;
  }
}
