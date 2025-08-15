import { Button } from '@/components/ui/button';

interface SpatialReasoningProps {
  question: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
}

export function SpatialReasoning({ question, options, value, onChange }: SpatialReasoningProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-center leading-relaxed">
        {question}
      </h2>
      
      {/* Visual representation of a 2D pattern that folds into a cube */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <svg width="200" height="150" viewBox="0 0 200 150" className="border rounded-lg bg-tech-surface/20">
            {/* Draw a cross-shaped pattern that folds into a cube */}
            <rect x="50" y="25" width="25" height="25" fill="hsl(var(--tech-primary))" fillOpacity="0.3" stroke="hsl(var(--tech-primary))" strokeWidth="2" />
            <rect x="50" y="50" width="25" height="25" fill="hsl(var(--tech-primary))" fillOpacity="0.3" stroke="hsl(var(--tech-primary))" strokeWidth="2" />
            <rect x="25" y="50" width="25" height="25" fill="hsl(var(--tech-primary))" fillOpacity="0.3" stroke="hsl(var(--tech-primary))" strokeWidth="2" />
            <rect x="75" y="50" width="25" height="25" fill="hsl(var(--tech-primary))" fillOpacity="0.3" stroke="hsl(var(--tech-primary))" strokeWidth="2" />
            <rect x="100" y="50" width="25" height="25" fill="hsl(var(--tech-primary))" fillOpacity="0.3" stroke="hsl(var(--tech-primary))" strokeWidth="2" />
            <rect x="50" y="75" width="25" height="25" fill="hsl(var(--tech-primary))" fillOpacity="0.3" stroke="hsl(var(--tech-primary))" strokeWidth="2" />
            
            {/* Add fold lines */}
            <line x1="50" y1="25" x2="75" y2="25" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="50" y1="50" x2="75" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="75" y1="50" x2="100" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="50" y1="75" x2="75" y2="75" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
          </svg>
          <p className="text-xs text-muted-foreground text-center mt-2">2D Pattern (fold along dashed lines)</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            variant={value === option ? "tech" : "outline"}
            className="p-6 h-auto flex-col space-y-2 transition-all duration-200 hover:scale-[1.02]"
            onClick={() => onChange(option)}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-semibold">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="text-lg font-medium">{option}</span>
          </Button>
        ))}
      </div>
      
      <p className="text-sm text-muted-foreground text-center">
        This tests your spatial reasoning ability - an important skill for 3D printing and design.
      </p>
    </div>
  );
}