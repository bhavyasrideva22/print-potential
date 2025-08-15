import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle, ArrowRight, Download, Share2 } from 'lucide-react';
import { AssessmentResult } from '@/types/assessment';

interface ResultsPageProps {
  result: AssessmentResult;
  onRestart: () => void;
}

export function ResultsPage({ result, onRestart }: ResultsPageProps) {
  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'yes':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'maybe':
        return <AlertCircle className="h-8 w-8 text-yellow-500" />;
      case 'no':
        return <XCircle className="h-8 w-8 text-red-500" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.recommendation) {
      case 'yes':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'maybe':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'no':
        return 'text-red-600 bg-red-50 border-red-200';
    }
  };

  const getRecommendationText = () => {
    switch (result.recommendation) {
      case 'yes':
        return 'Yes - You should pursue 3D printing!';
      case 'maybe':
        return 'Maybe - With some preparation';
      case 'no':
        return 'Not recommended at this time';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-tech-surface to-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent mb-4">
            Your Assessment Results
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis of your 3D printing readiness
          </p>
        </div>

        {/* Overall Recommendation */}
        <Card className={`p-8 mb-8 border-2 ${getRecommendationColor()}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            {getRecommendationIcon()}
            <h2 className="text-2xl font-bold">{getRecommendationText()}</h2>
          </div>
          
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold">{result.overallConfidence}%</div>
            <p className="text-lg">Overall Confidence Score</p>
            <Progress value={result.overallConfidence} className="h-3 max-w-md mx-auto" />
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Detailed Scores */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Detailed Analysis</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Psychometric Fit</span>
                  <span className={`font-semibold ${getScoreColor(result.psychometricFitScore)}`}>
                    {result.psychometricFitScore}%
                  </span>
                </div>
                <Progress value={result.psychometricFitScore} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Technical Readiness</span>
                  <span className={`font-semibold ${getScoreColor(result.technicalReadinessScore)}`}>
                    {result.technicalReadinessScore}%
                  </span>
                </div>
                <Progress value={result.technicalReadinessScore} className="h-2" />
              </div>
            </div>
          </Card>

          {/* WISCAR Breakdown */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">WISCAR Framework Analysis</h3>
            
            <div className="space-y-4">
              {Object.entries(result.wiscarScores).map(([key, score]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="capitalize">{key === 'realWorld' ? 'Real World' : key}</span>
                    <span className={`font-semibold ${getScoreColor(score)}`}>{score}%</span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Insights & Recommendations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Personalized Insights</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {result.personalizedInsights}
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Recommended Career Roles:</h4>
              <div className="flex flex-wrap gap-2">
                {result.careerRoles.map((role, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Your Learning Path</h3>
            <div className="space-y-3">
              {result.learningPath.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-primary text-white rounded-full text-xs font-semibold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6">Recommended Next Steps</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-600 mb-3">If You Proceed:</h4>
              <ul className="space-y-2">
                {result.nextSteps.ifYes.map((step, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-600 mb-3">Alternative Paths:</h4>
              <ul className="space-y-2">
                {result.nextSteps.ifNo.map((step, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="group">
            <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Download Full Report
          </Button>
          <Button variant="tech" size="lg">
            <Share2 className="mr-2 h-4 w-4" />
            Share Results
          </Button>
          <Button variant="outline" size="lg" onClick={onRestart}>
            Take Assessment Again
          </Button>
        </div>
      </div>
    </div>
  );
}