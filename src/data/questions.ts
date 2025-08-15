import { AssessmentQuestion } from '@/types/assessment';

export const assessmentQuestions: AssessmentQuestion[] = [
  // Psychometric Section - Interest Scale
  {
    id: 'psych_1',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest',
    question: 'I enjoy working with physical and digital design tools.',
    required: true
  },
  {
    id: 'psych_2',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest',
    question: 'I am fascinated by how things are built or manufactured.',
    required: true
  },
  {
    id: 'psych_3',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest',
    question: 'I like experimenting with gadgets, tools, or hands-on projects.',
    required: true
  },
  {
    id: 'psych_4',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'personality',
    question: 'I continue learning even after experiencing failure.',
    required: true
  },
  {
    id: 'psych_5',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'personality',
    question: 'I pay close attention to details and follow processes carefully.',
    required: true
  },

  // Technical Section
  {
    id: 'tech_1',
    type: 'mcq',
    category: 'technical',
    subcategory: 'knowledge',
    question: 'What does "layer height" refer to in 3D printing?',
    options: [
      'The total height of the printed object',
      'The thickness of each printed layer',
      'The height of the printer nozzle',
      'The maximum height the printer can reach'
    ],
    required: true
  },
  {
    id: 'tech_2',
    type: 'mcq',
    category: 'technical',
    subcategory: 'materials',
    question: 'Which material is most flexible in FDM 3D printing?',
    options: ['PLA', 'ABS', 'TPU', 'PETG'],
    required: true
  },
  {
    id: 'tech_3',
    type: 'mcq',
    category: 'technical',
    subcategory: 'software',
    question: 'What is the difference between slicing and modeling software?',
    options: [
      'Slicing creates 3D models, modeling prepares them for printing',
      'Modeling creates 3D designs, slicing converts them to printer instructions',
      'They are the same thing with different names',
      'Slicing is for resin printers, modeling is for FDM printers'
    ],
    required: true
  },
  {
    id: 'tech_4',
    type: 'likert',
    category: 'technical',
    subcategory: 'aptitude',
    question: 'I can easily visualize how 3D objects would look from different angles.',
    required: true
  },
  {
    id: 'tech_5',
    type: 'mcq',
    category: 'technical',
    subcategory: 'experience',
    question: 'What is your experience with CAD software?',
    options: [
      'Never used any CAD software',
      'Basic familiarity with simple tools like TinkerCAD',
      'Intermediate experience with Fusion360 or similar',
      'Advanced user of professional CAD software'
    ],
    required: true
  },

  // WISCAR Framework
  {
    id: 'wiscar_will_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'will',
    question: 'I am willing to spend hours troubleshooting technical problems.',
    required: true
  },
  {
    id: 'wiscar_will_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'will',
    question: 'I maintain discipline and consistency in learning new skills.',
    required: true
  },
  {
    id: 'wiscar_interest_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'interest',
    question: 'I\'m naturally drawn to prototyping and making physical objects.',
    required: true
  },
  {
    id: 'wiscar_interest_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'interest',
    question: 'The idea of turning digital designs into real objects excites me.',
    required: true
  },
  {
    id: 'wiscar_cognitive_1',
    type: 'spatial',
    category: 'wiscar',
    subcategory: 'cognitive',
    question: 'Which 3D shape would result from folding this 2D pattern?',
    options: ['Cube', 'Pyramid', 'Cylinder', 'Cone'],
    required: true
  },
  {
    id: 'wiscar_ability_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'ability',
    question: 'I actively seek feedback to improve my work.',
    required: true
  },
  {
    id: 'wiscar_ability_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'ability',
    question: 'I believe my abilities can be developed through effort and practice.',
    required: true
  },
  {
    id: 'wiscar_real_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'realWorld',
    question: 'I would enjoy designing functional prototypes for real-world problems.',
    required: true
  },
  {
    id: 'wiscar_real_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'realWorld',
    question: 'Working in a technical manufacturing environment appeals to me.',
    required: true
  }
];

export const questionSections = [
  {
    title: 'Personal Interest & Motivation',
    description: 'Understanding your natural interests and motivations',
    questions: assessmentQuestions.filter(q => q.category === 'psychometric')
  },
  {
    title: 'Technical Knowledge & Aptitude',
    description: 'Evaluating your current technical foundation',
    questions: assessmentQuestions.filter(q => q.category === 'technical')
  },
  {
    title: 'WISCAR Framework Analysis',
    description: 'Comprehensive readiness assessment across key dimensions',
    questions: assessmentQuestions.filter(q => q.category === 'wiscar')
  }
];