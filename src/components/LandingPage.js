import React from 'react';
import { useState } from 'react';

function LandingPage() {
 const [email, setEmail] = useState('');
 const [loading, setLoading] = useState(false);
 const [transcript, setTranscript] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate fetching transcript data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTranscript('Transcript text goes here...');
    setLoading(false);
 };

 return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center text-3xl font-bold text-gray-800">Meeting Transcript</h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <input
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-bold text-white bg-gradient-to-r from-cyan-400 to-light-blue-500 rounded-md"
            >
              {loading ? 'Loading...' : 'Get Transcript'}
            </button>
          </form>
          {transcript && (
            <div className="mt-6">
              <h2 className="text-center text-2xl font-bold text-gray-800">Transcript</h2>
              <pre className="text-center p-4 bg-gray-100 rounded-md">{transcript}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
 );
}

export default LandingPage;