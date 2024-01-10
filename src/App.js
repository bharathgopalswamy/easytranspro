import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar, { SidebarItem } from './components/Sidebar';
import MeetingPage from './components/MeetingPage';
import LandingPage from './components/LandingPage';


function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleSidebarItemClick = (page) => {
    console.log('Clicked on:', page);
    setCurrentPage(page);
  };

  // Additional function to navigate to the MeetingPage
  const navigateToMeetingPage = () => {
    handleSidebarItemClick('meetings');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar component ... */}
      <Sidebar handleSidebarItemClick={handleSidebarItemClick}>
        <ul>
          {/* Sidebar items ... */}
          <SidebarItem
            text="Dashboard"
            onClick={() => handleSidebarItemClick('dashboard')}
          />
          <SidebarItem
            text="Meetings"
            onClick={navigateToMeetingPage} // Use the new function
          />
          {/* Additional sidebar items ... */}
        </ul>
      </Sidebar>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar component ... */}
        <Navbar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {/* Conditionally render components based on the current page */}
          {currentPage === 'landing' && <LandingPage />}
          {currentPage === 'meetings' && <MeetingPage />}
          {/* Add conditions for other pages if needed */}
        </main>
      </div>
    </div>
  );
}

export default App;