
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, CheckCircle, PlayCircle, BookOpen, Heart, Brain, Trophy, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const WebinarLanding = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const { toast } = useToast();

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required for registration.",
        variant: "destructive"
      });
      return;
    }

    // Simulate registration
    setIsRegistered(true);
    toast({
      title: "Registration Successful! 🎉",
      description: "Check your email for webinar details and calendar invite.",
    });
    
    // Reset form
    setEmail('');
    setName('');
  };

  const benefits = [
    {
      icon: Brain,
      title: "Brain Development Secrets",
      description: "Discover the critical windows of opportunity in your child's brain development"
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Learn how to nurture emotional regulation and empathy in early years"
    },
    {
      icon: BookOpen,
      title: "Language & Learning",
      description: "Proven strategies to boost language development and cognitive skills"
    },
    {
      icon: Trophy,
      title: "Future Success",
      description: "Set the foundation for your child's academic and social success"
    }
  ];

  const curriculum = [
    "The Science of Early Brain Development (0-5 years)",
    "Critical Periods for Language and Social Skills",
    "Nutrition's Impact on Cognitive Development",
    "Screen Time Guidelines and Digital Wellness",
    "Creating Brain-Building Daily Routines",
    "Recognizing and Addressing Developmental Red Flags"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 3-year-old Emma",
      content: "This webinar completely changed how I interact with my daughter. The brain development insights were eye-opening!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Father of twins (2 years old)",
      content: "Practical, science-based advice that actually works. My boys are more engaged and learning faster than ever.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Daycare Director & Mom",
      content: "As both a professional and parent, this webinar provided invaluable strategies I use daily with dozens of children.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🧠 FREE EXPERT WEBINAR
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
              Unlock Your Child's
              <span className="block text-yellow-300">Brain Potential</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join renowned child development expert Dr. Emily Carter for a FREE 90-minute webinar on maximizing your child's brain development during the critical 0-5 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-yellow-300" />
                <span>December 28th, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span>7:00 PM EST</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-yellow-300" />
                <span>3,247 Parents Registered</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Reserve Your FREE Spot</h3>
              {!isRegistered ? (
                <form onSubmit={handleRegistration} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white text-gray-900 border-0 text-lg py-3"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-gray-900 border-0 text-lg py-3"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg py-3 transform hover:scale-105 transition-all duration-200"
                  >
                    REGISTER FOR FREE
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">You're Registered!</h4>
                  <p className="text-blue-100">Check your email for webinar access details.</p>
                </div>
              )}
              <p className="text-sm text-blue-200 mt-3 text-center">
                💯 100% Free • 🔒 No Spam • ✨ Instant Access
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-red-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">
            ⚠️ LIMITED SPOTS AVAILABLE - Only 753 seats remaining! This webinar won't be recorded.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Science-backed strategies that will transform your understanding of child development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-playfair font-bold text-center mb-8 text-gray-900">
              Complete Curriculum Breakdown
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {curriculum.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Expert */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  Your Expert Instructor
                </Badge>
                <h2 className="text-4xl font-playfair font-bold mb-6">
                  Dr. Emily Carter, Ph.D.
                </h2>
                <p className="text-xl mb-6 text-purple-100">
                  Pediatric Neuroscientist & Child Development Specialist
                </p>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <span>15+ years researching early childhood brain development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-yellow-300" />
                    <span>Author of "The First Five Years" (NY Times Bestseller)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-yellow-300" />
                    <span>Helped over 50,000 families worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                    <span>Featured on CNN, Today Show, and NPR</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-6xl">
                  👩‍⚕️
                </div>
                <p className="mt-6 text-purple-100 italic text-lg">
                  "Every child deserves the best start in life. My mission is to empower parents with the knowledge they need to nurture brilliant, confident children."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
              What Parents Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of parents who've transformed their approach to child development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Don't Miss This Opportunity
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Your child's brain development happens only once. Get the expert guidance you need to make these precious years count.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-300" />
                <span className="text-2xl font-bold">LAST CHANCE</span>
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              {!isRegistered ? (
                <form onSubmit={handleRegistration} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white text-gray-900 border-0 text-lg py-3"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-gray-900 border-0 text-lg py-3"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg py-3 transform hover:scale-105 transition-all duration-200"
                  >
                    SECURE MY FREE SPOT NOW
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">You're All Set!</h4>
                  <p className="text-green-100">We'll see you at the webinar!</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">90</div>
                <div className="text-green-200">Minutes of Expert Content</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$0</div>
                <div className="text-green-200">Completely FREE</div>
              </div>
              <div>
                <div className="text-3xl font-bold">753</div>
                <div className="text-green-200">Spots Remaining</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-playfair font-bold mb-4">MindBloom Parenting</h3>
            <p className="text-gray-400">Empowering parents to nurture brilliant children</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 MindBloom Parenting. All rights reserved. | 
              <span className="ml-2">Privacy Policy | Terms of Service</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebinarLanding;
