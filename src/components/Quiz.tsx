import React from 'react';

export default function Quiz() {
  return (
    <div className="w-full h-full flex-grow flex flex-col">
      <iframe 
        src="https://ascend-quiz.vercel.app" 
        className="w-full h-full flex-grow min-h-[800px] border-0"
        title="Ascend Career Quiz"
        allow="clipboard-write"
      />
    </div>
  );
}
