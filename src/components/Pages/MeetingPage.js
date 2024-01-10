import React, { useState } from 'react';

const MeetingPage = () => {
  const [activeOption, setActiveOption] = useState('notes');
  const [notesOpen, setNotesOpen] = useState(true);
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  const options = [
    { id: 'notes', label: 'Notes', setOpen: setNotesOpen },
    { id: 'transcript', label: 'Transcript', setOpen: setTranscriptOpen },
    { id: 'insights', label: 'Conversational Insights', setOpen: setInsightsOpen },
  ];

  const sampleVideoUrl = 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';

  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row items-start">
      
      <div className="w-full md:w-2/4 pr-0 md:pr-8 mb-4 md:mb-0">
        <div className="mb-4">
          <video className="w-full rounded shadow-md" controls>
            <source src={sampleVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Navigation Options */}
      <div className="w-full md:w-2/4">
        <div className="flex p-4 md:p-6 mb-4 ml-0 md:ml-6 bg-indigo-400">
          {options.map((option, index) => (
            <React.Fragment key={option.id}>
              {index !== 0 && <hr className="my-2 md:my-4 border-t border-gray-300" />}
              <button
                className={`btn-nav text-white p-2 rounded hover:rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none transition-all duration-300 ease-in-out ${
                  activeOption === option.id ? 'btn-nav-active' : ''
                }`}
                onClick={() => {
                  setActiveOption(option.id);
                  option.setOpen(true);
                }}
              >
                {option.label}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Content Options */}
        {options.map((option) => (
          <div key={option.id} className={`${activeOption === option.id ? '' : 'hidden'}`}>
            {option.id === 'notes' && (
              <div className="bg-white p-4 md:p-6 rounded shadow-md mb-4 ml-0 md:ml-6">
                <h2 className="text-xl font-bold mb-4">Notes</h2>
                <textarea className="w-full h-40 bg-gray-100 p-2 rounded" placeholder="Add your notes here..." />
              </div>
            )}

            {option.id === 'transcript' && (
              <div className="bg-white p-4 md:p-6 rounded shadow-md mb-4 ml-0 md:ml-6">
                <h2 className="text-xl font-bold mb-4">Transcript</h2>
                <p>...</p>
              </div>
            )}

            {option.id === 'insights' && (
              <div className="bg-white p-4 md:p-6 rounded shadow-md mb-4 ml-0 md:ml-6">
                <h2 className="text-xl font-bold mb-4">Conversational Insights</h2>
                <p>...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingPage;
