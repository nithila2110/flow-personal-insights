
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatBot } from "@/components/ChatBot";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FitnessRecommendations() {
  const navigate = useNavigate();
  const currentPhase = "Luteal Phase";
  
  // Sample workouts
  const workouts = [
    {
      title: "Gentle Yoga Flow",
      duration: "20 minutes",
      intensity: "Low",
      description: "A slow, gentle flow focusing on deep stretching and relaxation. Perfect for when energy is low.",
      benefits: "Reduces tension, improves blood flow, and calms the nervous system."
    },
    {
      title: "Nature Walk",
      duration: "30 minutes",
      intensity: "Low-Medium",
      description: "A moderate-paced walk outdoors, preferably in nature. Focus on deep breathing and mindfulness.",
      benefits: "Boosts mood, reduces stress, and provides gentle cardio without exhaustion."
    },
    {
      title: "Swimming or Water Aerobics",
      duration: "25 minutes",
      intensity: "Medium",
      description: "Gentle swimming or water movements that provide resistance without impact.",
      benefits: "Eases joint pain, provides full-body exercise with minimal strain."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cycleflow-lavender to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Back Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            className="flex items-center gap-1 hover:bg-cycleflow-lavender/30"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
        
        <Card className="mb-8 border-cycleflow-darkpurple shadow-md">
          <CardHeader className="bg-cycleflow-blue rounded-t-lg">
            <CardTitle className="text-2xl md:text-3xl">Fitness Recommendations for {currentPhase}</CardTitle>
            <CardDescription>
              Personalized exercise advice for your current cycle phase
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Explanation Section */}
              <div className="p-5 bg-cycleflow-purple/30 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Why It Matters</h3>
                <p>
                  During the <span className="font-semibold">Luteal Phase</span>, your energy levels may fluctuate 
                  as your body prepares for menstruation. You might find yourself feeling more fatigued or 
                  experiencing mood changes. Gentle exercises that don't overexert your body are ideal during 
                  this time.
                </p>
              </div>
              
              {/* Workout Types */}
              <div>
                <h3 className="text-xl font-medium mb-4">Best Workout Types for This Phase</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Gentle Yoga", suitability: "Highly recommended" },
                    { name: "Walking", suitability: "Excellent choice" },
                    { name: "Swimming", suitability: "Highly recommended" },
                    { name: "Pilates", suitability: "Good option" },
                    { name: "Light Stretching", suitability: "Excellent choice" },
                    { name: "Tai Chi", suitability: "Good option" },
                    { name: "Cycling (low intensity)", suitability: "Good option" },
                    { name: "Meditation", suitability: "Highly recommended" },
                    { name: "HIIT Workouts", suitability: "Not recommended", notRecommended: true },
                  ].map((workout, index) => (
                    <div 
                      key={index} 
                      className={`text-center p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                        workout.notRecommended 
                          ? 'bg-red-100 border border-red-200' 
                          : 'bg-white'
                      }`}
                    >
                      <p className="font-medium mb-1">{workout.name}</p>
                      <p className={`text-xs ${
                        workout.notRecommended 
                          ? 'text-red-600' 
                          : 'text-green-600'
                      }`}>
                        {workout.suitability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Workout Recommendations */}
              <div>
                <h3 className="text-xl font-medium mb-4">Recommended Workouts</h3>
                <div className="space-y-4">
                  {workouts.map((workout, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-cycleflow-yellow/30 py-3">
                        <CardTitle className="text-lg">{workout.title}</CardTitle>
                        <CardDescription>
                          Duration: {workout.duration} | Intensity: {workout.intensity}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-sm">Description:</h4>
                            <p className="text-sm">{workout.description}</p>
                          </div>
                          <div className="bg-cycleflow-blue/20 p-2 rounded-md">
                            <h4 className="font-medium text-sm">Benefits:</h4>
                            <p className="text-sm">{workout.benefits}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Exercise Tips */}
              <div className="p-5 bg-cycleflow-mint/30 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Exercise Tips for Luteal Phase</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-cycleflow-darkpurple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                    <span>Listen to your body and reduce intensity if you feel fatigued</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cycleflow-darkpurple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                    <span>Stay hydrated before, during, and after exercise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cycleflow-darkpurple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                    <span>Focus on mindful movement rather than pushing for personal records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cycleflow-darkpurple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                    <span>Consider exercising earlier in the day when energy levels might be higher</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}
