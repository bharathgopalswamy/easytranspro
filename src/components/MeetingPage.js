import React, { useState } from 'react';

const MeetingPage = () => {
  console.log('MeetingPage rendered');
  const [notesOpen, setNotesOpen] = useState(false);
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Placeholder video URL */}
      <video
        className="w-full max-w-4xl"
        src="https://www.example.com/your_video_url.mp4"
        controls // Add controls attribute for playback controls
      />

      <div className="mt-4 flex items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-4 rounded"
          onClick={() => setNotesOpen(!notesOpen)}
        >
          Notes
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 mr-4 rounded"
          onClick={() => setTranscriptOpen(!transcriptOpen)}
        >
          Transcript
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setInsightsOpen(!insightsOpen)}
        >
          Conversational Insights
        </button>
      </div>

      {notesOpen && (
        <div className="mt-4 bg-white p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Notes</h2>
          <textarea className="w-full h-64 bg-gray-100 p-2 rounded" />
        </div>
      )}

      {transcriptOpen && (
        <div className="mt-4 bg-white p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Transcript</h2>
          <p>...</p>
        </div>
      )}

      {insightsOpen && (
        <div className="mt-4 bg-white p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Conversational Insights</h2>
          <p>...</p>
        </div>
      )}
    </div>
  );
};

export default MeetingPage;
