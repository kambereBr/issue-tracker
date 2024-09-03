export interface Issue {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }
  
  const API_URL = 'http://localhost:4000/issues';
  
  export async function fetchIssues(): Promise<Issue[]> {
    const response = await fetch(API_URL);
    return response.json();
  }
  
  export async function createIssue(issue: Omit<Issue, 'id' | 'createdAt' | 'updatedAt'>): Promise<Issue> {
    console.log(issue);
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue)
    });
    return response.json();
  }
  
  export async function updateIssue(id: number, issue: Omit<Issue, 'createdAt' | 'updatedAt'>): Promise<Issue> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue)
    });
    return response.json();
  }
  
  export async function deleteIssue(id: number): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }
  