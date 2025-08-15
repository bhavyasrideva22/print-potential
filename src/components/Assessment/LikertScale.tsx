import { Button } from '@/components/ui/button';

interface LikertScaleProps {
  question: string;
  value?: number;
  onChange: (value: number) => void;
}

const SCALE_OPTIONS = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' }
];

export function LikertScale({ question, value, onChange }: LikertScaleProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-center leading-relaxed">
        {question}
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-2 text-center text-sm text-muted-foreground mb-2">
          {SCALE_OPTIONS.map((option) => (
            <span key={option.value} className="font-medium">
              {option.label}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {SCALE_OPTIONS.map((option) => (
            <Button
              key={option.value}
              variant={value === option.value ? "tech" : "outline"}
              className="h-16 text-lg font-semibold transition-all duration-200 hover:scale-105"
              onClick={() => onChange(option.value)}
            >
              {option.value}
            </Button>
          ))}
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>1 - Strongly Disagree</span>
          <span>5 - Strongly Agree</span>
        </div>
      </div>
    </div>
  );
}