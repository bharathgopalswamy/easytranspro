import React from 'react';

function LandingPage() {
 return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center text-3xl font-bold text-gray-800">Welcome to MeetingMate</h1>
          <div className="mt-6 space-y-6">
            <h2 className="text-center text-2xl font-bold text-gray-800">Why MeetingMate?</h2>
            <ul className="text-center list-disc list-inside">
              <li>One-stop platform for all your meeting needs</li>
              <li>Instant meeting scheduling and management</li>
              <li>Transparent meeting notes and action items</li>
            </ul>
            <h2 className="text-center text-2xl font-bold text-gray-800">How it works?</h2>
            <ul className="text-center list-disc list-inside">
              <li>Sign up for an account and add your meetings</li>
              <li>Access real-time meeting details on our platform</li>
              <li>Stay organized with automatic notifications and reminders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 );
}

export default LandingPage;