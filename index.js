import { useState } from 'react';

const IndexPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
    };

    fetch('/api/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Data saved:', result);
        // Handle success or display a success message to the user
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        // Handle error or display an error message to the user
      });
  };

  return (
    <div>
      <h1>Save Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default IndexPage;
