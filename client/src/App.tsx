import React, { useState, useEffect } from 'react';
import IssueList from './components/IssueList';
import './App.css';
import { IssueData } from './types';

const App: React.FC = () => {
  const [issues, setIssues] = useState<IssueData[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const URL = 'http://localhost:4000/issues';

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error('Error fetching issues:', error));
  }, []);

  const addIssue = () => {
    const newIssue = { title: newTitle, description: newDescription };

    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue),
    })
      .then((response) => response.json())
      .then((data) => {
        setIssues([...issues, data]);
        setNewTitle('');
        setNewDescription('');
      })
      .catch((error) => console.error('Error adding issue:', error));
  };

  const deleteIssue = (id: number) => {
    fetch(URL + `/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setIssues(issues.filter((issue) => issue.id !== id));
      })
      .catch((error) => console.error('Error deleting issue:', error));
  };

  const updateIssue = (id: number, updatedData: Partial<IssueData>) => {
    fetch(URL + `/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        setIssues(issues.map((issue) => (issue.id === id ? { ...issue, ...data } : issue)));
      })
      .catch((error) => console.error('Error updating issue:', error));
  }

  return (
    <div className="app-container">
      <h1>Issue Tracker</h1>
      
      <div className="add-issue-form">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Issue title"
          className="new-issue-title"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Issue description"
          className="new-issue-description"
        />
        <button onClick={addIssue} className="add-button">Add Issue</button>
      </div>

      <IssueList issues={issues} onUpdateIssue={(id, updatedData) => updateIssue(id, updatedData)} onDeleteIssue={deleteIssue} />
    </div>
  );
};

export default App;
