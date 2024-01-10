// App.js

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar, { SidebarItem } from './components/Sidebar';
import MeetingPage from './components/Pages/MeetingPage';
import LandingPage from './components/Pages/LandingPage';
import { faTachometerAlt, faCalendar, faFileAudio, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleSidebarItemClick = (page) => {
    console.log('Clicked on:', page);

    if (page === 'Meetings') {
      setCurrentPage('meetings');
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar handleSidebarItemClick={handleSidebarItemClick}>
        <SidebarItem icon={<FontAwesomeIcon icon={faTachometerAlt} />} text="Dashboard" active={true} alert={false} />
        <SidebarItem icon={<FontAwesomeIcon icon={faCalendar} />} text="Meetings" active={false} alert={false} />
        <SidebarItem icon={<FontAwesomeIcon icon={faFileAudio} />} text="Transcriptor" active={false} alert={false} />
        <SidebarItem icon={<FontAwesomeIcon icon={faRobot} />} text="AI" active={false} alert={false} />
      </Sidebar>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {currentPage === 'landing' && <LandingPage />}
          {currentPage === 'meetings' && <MeetingPage />}
        </main>
      </div>
    </div>
  );

  
}

export default App;
