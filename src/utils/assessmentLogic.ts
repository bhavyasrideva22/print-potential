import { AssessmentResponse, AssessmentResult, WISCARScores } from '@/types/assessment';

export function calculateAssessmentResult(responses: AssessmentResponse[]): AssessmentResult {
  const responseMap = new Map(responses.map(r => [r.questionId, r.value]));
  
  // Calculate psychometric fit (interest and personality questions)
  const psychometricQuestions = ['psych_1', 'psych_2', 'psych_3', 'psych_4', 'psych_5'];
  const psychometricSum = psychometricQuestions.reduce((sum, id) => {
    const value = responseMap.get(id) as number || 3;
    return sum + value;
  }, 0);
  const psychometricFitScore = Math.round((psychometricSum / (psychometricQuestions.length * 5)) * 100);

  // Calculate technical readiness
  const techKnowledgeScore = calculateTechnicalKnowledge(responseMap);
  const techAptitudeScore = (responseMap.get('tech_4') as number || 3) * 20;
  const techExperienceScore = calculateExperienceScore(responseMap.get('tech_5') as string || '');
  const technicalReadinessScore = Math.round((techKnowledgeScore + techAptitudeScore + techExperienceScore) / 3);

  // Calculate WISCAR scores
  const wiscarScores = calculateWISCARScores(responseMap);

  // Overall confidence (weighted average)
  const overallConfidence = Math.round(
    (psychometricFitScore * 0.3 + technicalReadinessScore * 0.4 + 
     Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / 6 * 0.3)
  );

  // Determine recommendation
  let recommendation: 'yes' | 'maybe' | 'no';
  if (overallConfidence >= 85) recommendation = 'yes';
  else if (overallConfidence >= 65) recommendation = 'maybe';
  else recommendation = 'no';

  // Generate personalized insights
  const personalizedInsights = generateInsights(
    psychometricFitScore, 
    technicalReadinessScore, 
    wiscarScores,
    overallConfidence
  );

  // Generate learning path
  const learningPath = generateLearningPath(technicalReadinessScore, wiscarScores);

  return {
    psychometricFitScore,
    technicalReadinessScore,
    wiscarScores,
    overallConfidence,
    recommendation,
    personalizedInsights,
    learningPath,
    careerRoles: [
      '3D Printing Specialist',
      'Additive Manufacturing Engineer',
      'CAD Designer',
      'Product Prototyper',
      'Bioprinting Technician'
    ],
    nextSteps: {
      ifYes: [
        'Enroll in online CAD course',
        'Practice slicing models',
        'Join maker forums',
        'Get hands-on with entry-level 3D printer'
      ],
      ifNo: [
        'Explore digital design',
        'Try mechanical prototyping',
        'Consider CNC machining',
        'Look into industrial design'
      ]
    }
  };
}

function calculateTechnicalKnowledge(responseMap: Map<string, number | string>): number {
  const correctAnswers = {
    'tech_1': 'The thickness of each printed layer',
    'tech_2': 'TPU',
    'tech_3': 'Modeling creates 3D designs, slicing converts them to printer instructions'
  };

  let correct = 0;
  Object.entries(correctAnswers).forEach(([questionId, correctAnswer]) => {
    if (responseMap.get(questionId) === correctAnswer) {
      correct++;
    }
  });

  return Math.round((correct / Object.keys(correctAnswers).length) * 100);
}

function calculateExperienceScore(experience: string): number {
  const scores = {
    'Never used any CAD software': 20,
    'Basic familiarity with simple tools like TinkerCAD': 50,
    'Intermediate experience with Fusion360 or similar': 80,
    'Advanced user of professional CAD software': 100
  };
  return scores[experience as keyof typeof scores] || 20;
}

function calculateWISCARScores(responseMap: Map<string, number | string>): WISCARScores {
  const will = Math.round(((responseMap.get('wiscar_will_1') as number || 3) + 
                          (responseMap.get('wiscar_will_2') as number || 3)) / 2 * 20);
  
  const interest = Math.round(((responseMap.get('wiscar_interest_1') as number || 3) + 
                              (responseMap.get('wiscar_interest_2') as number || 3)) / 2 * 20);
  
  const skill = Math.round((responseMap.get('tech_4') as number || 3) * 20);
  
  const cognitive = responseMap.get('wiscar_cognitive_1') === 'Cube' ? 85 : 65;
  
  const ability = Math.round(((responseMap.get('wiscar_ability_1') as number || 3) + 
                             (responseMap.get('wiscar_ability_2') as number || 3)) / 2 * 20);
  
  const realWorld = Math.round(((responseMap.get('wiscar_real_1') as number || 3) + 
                               (responseMap.get('wiscar_real_2') as number || 3)) / 2 * 20);

  return { will, interest, skill, cognitive, ability, realWorld };
}

function generateInsights(
  psychometric: number, 
  technical: number, 
  wiscar: WISCARScores,
  overall: number
): string {
  if (overall >= 85) {
    return "You demonstrate exceptional alignment with 3D printing. Your strong technical foundation, natural interest, and problem-solving mindset make you an ideal candidate for this field.";
  } else if (overall >= 75) {
    return "You show strong potential for 3D printing with good foundational skills. Focus on building your technical knowledge and gaining hands-on experience.";
  } else if (overall >= 65) {
    return "You have moderate potential for 3D printing. While you show interest, developing stronger technical skills and spatial reasoning will be important for success.";
  } else {
    return "3D printing may not be the best fit based on your current profile. Consider exploring related fields like digital design or mechanical engineering that align better with your strengths.";
  }
}

function generateLearningPath(technical: number, wiscar: WISCARScores): string[] {
  const path: string[] = [];
  
  if (technical < 60) {
    path.push('Start with TinkerCAD basics');
    path.push('Learn fundamental 3D modeling concepts');
  }
  
  if (wiscar.skill < 70) {
    path.push('Practice spatial reasoning exercises');
    path.push('Study basic geometry and design principles');
  }
  
  path.push('Explore Fusion360 intermediate tutorials');
  path.push('Learn about 3D printing materials');
  path.push('Practice slicing with Cura or PrusaSlicer');
  
  if (wiscar.realWorld > 75) {
    path.push('Join local maker spaces or FabLabs');
    path.push('Work on practical design projects');
  }
  
  return path.slice(0, 6); // Limit to 6 items
}