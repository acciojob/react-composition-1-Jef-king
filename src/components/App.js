import React, { useState } from 'react';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <div>
      <Item setSelectedTab={setSelectedTab} />
      <Result selectedTab={selectedTab} />
    </div>
  );
}

function Item({ setSelectedTab }) {
  const handleClick = (event) => {
    setSelectedTab(event.target.innerText);
  };

  return (
    <ul>
      <li onClick={handleClick}>Tab 1</li>
      <li onClick={handleClick}>Tab 2</li>
      <li onClick={handleClick}>Tab 3</li>
    </ul>
  );
}

function Result({ selectedTab }) {
  if (selectedTab !== '') {
    return <p>This is the content for {selectedTab}</p>;
  } else {
    return null;
  }
}
