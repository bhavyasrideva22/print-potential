import { Button } from '@/components/ui/button';

interface MultipleChoiceProps {
  question: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
}

export function MultipleChoice({ question, options, value, onChange }: MultipleChoiceProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-center leading-relaxed">
        {question}
      </h2>
      
      <div className="space-y-3">
        {options.map((option, index) => (
          <Button
            key={index}
            variant={value === option ? "tech" : "outline"}
            className="w-full text-left p-4 h-auto justify-start transition-all duration-200 hover:scale-[1.02]"
            onClick={() => onChange(option)}
          >
            <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-primary/10 text-tech-primary rounded-full mr-3 text-sm font-semibold">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="text-wrap">{option}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}