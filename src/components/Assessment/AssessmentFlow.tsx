import { useState } from 'react';
import { AssessmentResponse, AssessmentState } from '@/types/assessment';
import { questionSections } from '@/data/questions';
import { calculateAssessmentResult } from '@/utils/assessmentLogic';
import { AssessmentIntro } from './AssessmentIntro';
import { QuestionSection } from './QuestionSection';
import { ResultsPage } from './ResultsPage';

export function AssessmentFlow() {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentSection: -1, // -1 means intro
    currentQuestion: 0,
    responses: [],
    isComplete: false,
    result: undefined
  });

  const handleStart = () => {
    setAssessmentState(prev => ({ ...prev, currentSection: 0 }));
  };

  const handleResponse = (questionId: string, value: number | string) => {
    setAssessmentState(prev => {
      const existingIndex = prev.responses.findIndex(r => r.questionId === questionId);
      const newResponses = [...prev.responses];
      
      if (existingIndex >= 0) {
        newResponses[existingIndex] = { questionId, value };
      } else {
        newResponses.push({ questionId, value });
      }
      
      return { ...prev, responses: newResponses };
    });
  };

  const handleNextSection = () => {
    setAssessmentState(prev => ({
      ...prev,
      currentSection: prev.currentSection + 1,
      currentQuestion: 0
    }));
  };

  const handlePreviousSection = () => {
    setAssessmentState(prev => ({
      ...prev,
      currentSection: Math.max(0, prev.currentSection - 1),
      currentQuestion: 0
    }));
  };

  const handleComplete = () => {
    const result = calculateAssessmentResult(assessmentState.responses);
    setAssessmentState(prev => ({
      ...prev,
      isComplete: true,
      result
    }));
  };

  const handleRestart = () => {
    setAssessmentState({
      currentSection: -1,
      currentQuestion: 0,
      responses: [],
      isComplete: false,
      result: undefined
    });
  };

  // Show intro
  if (assessmentState.currentSection === -1) {
    return <AssessmentIntro onStart={handleStart} />;
  }

  // Show results
  if (assessmentState.isComplete && assessmentState.result) {
    return (
      <ResultsPage 
        result={assessmentState.result} 
        onRestart={handleRestart}
      />
    );
  }

  // Show current question section
  const currentSection = questionSections[assessmentState.currentSection];
  
  return (
    <QuestionSection
      section={currentSection}
      sectionIndex={assessmentState.currentSection}
      totalSections={questionSections.length}
      responses={assessmentState.responses}
      onResponse={handleResponse}
      onNext={handleNextSection}
      onPrevious={handlePreviousSection}
      onComplete={handleComplete}
    />
  );
}