import React, { useState } from 'react';

export default function App() {
  const tabs = [
    { title: 'Tab 1', content: 'This is the content for Tab 1.' },
    { title: 'Tab 2', content: 'This is the content for Tab 2.' },
    { title: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  return (
    <>
      <Tabs tabs={tabs} />
    </>
  );
}

function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);

  const handleClick = (title) => {
    setSelectedTab(title);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.title}
            onClick={() => handleClick(tab.title)}
            style={{ cursor: 'pointer', fontWeight: tab.title === selectedTab ? 'bold' : 'normal' }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>
        {tabs.map((tab) => (
          tab.title === selectedTab && <p key={tab.title}>{tab.content}</p>
        ))}
      </div>
    </div>
  );
}
