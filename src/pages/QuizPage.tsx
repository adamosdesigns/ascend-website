import React from 'react';
import Quiz from '../components/Quiz';

export default function QuizPage() {
  return (
    <div className="flex-grow bg-[#020617] pt-32 pb-12 flex flex-col items-center justify-start overflow-hidden w-full min-h-screen">
      <Quiz />
    </div>
  );
}