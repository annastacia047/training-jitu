import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [list] = useState([
    { name: 'apple', id: 1 },
    { name: 'banana', id: 2 },
    { name: 'cherry', id: 3 },
    { name: 'dates', id: 4 }
  ]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredList = list.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="container"> 
       <div style={{ margin: '0 auto', marginTop: '10%' }}>
      <label>Search:</label>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      {filteredList.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
    </div>
    </div>
    
  );
};

export default App;

