import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AssessmentQuestion, AssessmentResponse } from '@/types/assessment';
import { LikertScale } from './LikertScale';
import { MultipleChoice } from './MultipleChoice';
import { SpatialReasoning } from './SpatialReasoning';

interface QuestionSectionProps {
  section: {
    title: string;
    description: string;
    questions: AssessmentQuestion[];
  };
  sectionIndex: number;
  totalSections: number;
  responses: AssessmentResponse[];
  onResponse: (questionId: string, value: number | string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
}

export function QuestionSection({
  section,
  sectionIndex,
  totalSections,
  responses,
  onResponse,
  onNext,
  onPrevious,
  onComplete
}: QuestionSectionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = section.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === section.questions.length - 1;
  const isLastSection = sectionIndex === totalSections - 1;

  const getCurrentResponse = (questionId: string) => {
    return responses.find(r => r.questionId === questionId)?.value;
  };

  const handleQuestionResponse = (value: number | string) => {
    onResponse(currentQuestion.id, value);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      if (isLastSection) {
        onComplete();
      } else {
        onNext();
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex === 0) {
      onPrevious();
    } else {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const progress = ((sectionIndex * 100 + (currentQuestionIndex + 1) * (100 / section.questions.length)) / totalSections);
  const currentResponse = getCurrentResponse(currentQuestion.id);
  const canProceed = currentResponse !== undefined;

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'likert':
        return (
          <LikertScale
            question={currentQuestion.question}
            value={currentResponse as number}
            onChange={handleQuestionResponse}
          />
        );
      case 'mcq':
        return (
          <MultipleChoice
            question={currentQuestion.question}
            options={currentQuestion.options || []}
            value={currentResponse as string}
            onChange={handleQuestionResponse}
          />
        );
      case 'spatial':
        return (
          <SpatialReasoning
            question={currentQuestion.question}
            options={currentQuestion.options || []}
            value={currentResponse as string}
            onChange={handleQuestionResponse}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-tech-surface to-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-tech-primary">
                Section {sectionIndex + 1}: {section.title}
              </h1>
              <p className="text-muted-foreground">{section.description}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              {currentQuestionIndex + 1} of {section.questions.length}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 shadow-lg">
          <div className="space-y-6">
            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-tech-primary/10 text-tech-primary mb-4">
                Question {currentQuestionIndex + 1}
              </span>
            </div>
            
            {renderQuestion()}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={sectionIndex === 0 && currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <Button
            variant="tech"
            onClick={handleNext}
            disabled={!canProceed}
            className="min-w-32"
          >
            {isLastQuestion && isLastSection ? 'Complete' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}