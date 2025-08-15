import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Brain, Wrench, Target, Lightbulb } from 'lucide-react';
import heroImage from '@/assets/hero-3d-printer.jpg';

interface AssessmentIntroProps {
  onStart: () => void;
}

export function AssessmentIntro({ onStart }: AssessmentIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-tech-surface to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
                  3D Printing Specialist Readiness Assessment™
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover if you have what it takes to build a successful career in 3D printing and additive manufacturing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={onStart}
                  className="group"
                >
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-tech-primary rounded-full mr-2" />
                  20-30 minutes
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-tech-secondary rounded-full mr-2" />
                  Scientifically validated
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-tech-accent rounded-full mr-2" />
                  Personalized results
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-lg blur opacity-20" />
              <img 
                src={heroImage}
                alt="Advanced 3D printer in modern laboratory"
                className="relative rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Discover */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">What You'll Discover</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive assessment evaluates your readiness across multiple dimensions to give you a complete picture of your 3D printing potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-tech-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Brain className="h-6 w-6 text-tech-primary" />
            </div>
            <h3 className="font-semibold">Psychological Fit</h3>
            <p className="text-sm text-muted-foreground">
              Assess your personality traits, interests, and cognitive style alignment with 3D printing careers.
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-tech-secondary/10 rounded-lg flex items-center justify-center mx-auto">
              <Wrench className="h-6 w-6 text-tech-secondary" />
            </div>
            <h3 className="font-semibold">Technical Readiness</h3>
            <p className="text-sm text-muted-foreground">
              Evaluate your current knowledge of CAD, materials, and 3D printing fundamentals.
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-tech-accent/10 rounded-lg flex items-center justify-center mx-auto">
              <Target className="h-6 w-6 text-tech-accent" />
            </div>
            <h3 className="font-semibold">WISCAR Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive framework analyzing Will, Interest, Skill, Cognitive ability, and Real-world alignment.
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-tech-primary to-tech-secondary rounded-lg flex items-center justify-center mx-auto">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">Personalized Guidance</h3>
            <p className="text-sm text-muted-foreground">
              Receive custom learning paths, career recommendations, and next steps based on your results.
            </p>
          </Card>
        </div>
      </div>

      {/* Career Paths */}
      <div className="bg-tech-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">3D Printing Career Paths</h2>
            <p className="text-lg text-muted-foreground">
              Explore the diverse opportunities in the rapidly growing additive manufacturing industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: '3D Printing Specialist',
                description: 'Operate and maintain 3D printers, prepare files, and optimize print quality.',
                salary: '$45,000 - $75,000'
              },
              {
                role: 'Additive Manufacturing Engineer',
                description: 'Design workflows for production-scale 3D printing in manufacturing.',
                salary: '$65,000 - $95,000'
              },
              {
                role: 'CAD Designer',
                description: 'Create digital models optimized for 3D printing across various industries.',
                salary: '$50,000 - $80,000'
              },
              {
                role: 'Product Prototyper',
                description: 'Work in R&D teams to create functional prototypes and proof-of-concepts.',
                salary: '$55,000 - $85,000'
              },
              {
                role: 'Bioprinting Technician',
                description: 'Specialize in biomedical applications using advanced 3D printing technologies.',
                salary: '$60,000 - $90,000'
              },
              {
                role: 'Manufacturing Consultant',
                description: 'Help companies integrate 3D printing into their production processes.',
                salary: '$70,000 - $120,000'
              }
            ].map((career, index) => (
              <Card key={index} className="p-6 space-y-4">
                <h3 className="font-semibold text-tech-primary">{career.role}</h3>
                <p className="text-sm text-muted-foreground">{career.description}</p>
                <p className="text-sm font-medium text-tech-secondary">{career.salary}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}