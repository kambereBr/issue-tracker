import React, { useState } from 'react';
import { IssueData } from '../types';

interface IssueItemProps {
  issue: IssueData;
  onUpdate: (id: number, updatedData: Partial<IssueData>) => void;
  onDelete: (id: number) => void;
}

const IssueItem: React.FC<IssueItemProps> = ({ issue, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(issue.title);
  const [editDescription, setEditDescription] = useState(issue.description);
  const [error, setError] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editTitle.trim() || !editDescription.trim()) {
      setError('Title and description are required.');
      return;
    }

    onUpdate(issue.id, { title: editTitle, description: editDescription });
    setIsEditing(false);
    setError('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(issue.title);
    setEditDescription(issue.description);
    setError('');
  };

  const handleDelete = () => {
    onDelete(issue.id);
  };

  return (
    <div className="issue-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="issue-title-input"
            placeholder="Issue Title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="issue-description-input"
            placeholder="Issue Description"
          />
          {error && <p className="error-message">{error}</p>}
          <div className="issue-actions">
            <button onClick={handleSave} className="save-button">Save</button>
            <button onClick={handleCancel} className="cancel-button">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <div className="issue-actions">
            <button onClick={handleEdit} className="edit-button">Edit</button>
            <button onClick={handleDelete} className="delete-button">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default IssueItem;
