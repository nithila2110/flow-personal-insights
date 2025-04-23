import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChatBot } from "@/components/ChatBot";
import { Edit, ArrowRight, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [cycleData, setCycleData] = useState({
    phase: "Luteal Phase",
    lastPeriodDate: "April 23, 2025",
    nextPeriodDate: "May 21, 2025",
  });

  // Function to determine color based on cycle phase
  const getPhaseColor = () => {
    const phases: Record<string, string> = {
      "Follicular Phase": "bg-cycleflow-blue",
      "Ovulation Phase": "bg-cycleflow-yellow",
      "Luteal Phase": "bg-cycleflow-peach",
      "Menstrual Phase": "bg-cycleflow-pink",
    };
    
    return phases[cycleData.phase] || "bg-cycleflow-lavender";
  };
  
  // Navigate to recommendations pages
  const goToDietaryRecommendations = () => {
    navigate("/dietary-recommendations");
  };
  
  const goToFitnessRecommendations = () => {
    navigate("/fitness-recommendations");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cycleflow-lavender to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">CycleFlow Dashboard</h1>

        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-cycleflow-darkpurple"
            onClick={() => navigate("/healthcare-assistant")}
          >
            <HelpCircle className="h-5 w-5 text-primary" />
            Talk with our healthcare assistant
          </Button>
        </div>

        {/* Cycle Status Card */}
        <Card className="mb-8 border-cycleflow-darkpurple shadow-md">
          <CardHeader className={`flex flex-row items-center justify-between ${getPhaseColor()} rounded-t-lg`}>
            <CardTitle className="text-xl">Your Cycle Status</CardTitle>
            <Button size="icon" variant="ghost">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="text-center p-4 bg-cycleflow-lavender rounded-lg">
                <h2 className="text-2xl font-semibold mb-1">You're currently in the</h2>
                <p className="text-3xl font-bold text-primary">{cycleData.phase}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-cycleflow-pink bg-opacity-40 rounded-lg text-center">
                  <h3 className="font-medium mb-1">Last Period Started</h3>
                  <p className="text-lg font-semibold">{cycleData.lastPeriodDate}</p>
                </div>
                
                <div className="p-4 bg-cycleflow-purple bg-opacity-40 rounded-lg text-center">
                  <h3 className="font-medium mb-1">Next Period Expected</h3>
                  <p className="text-lg font-semibold">{cycleData.nextPeriodDate}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Recommendations Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Dietary Recommendations */}
          <Card className="border-cycleflow-darkpurple hover:shadow-lg transition-shadow">
            <CardHeader className="bg-cycleflow-mint rounded-t-lg">
              <CardTitle className="text-xl">Dietary Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  During your <span className="font-semibold">{cycleData.phase}</span>, focus on magnesium-rich foods to ease PMS symptoms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cycleflow-yellow bg-opacity-50 rounded-full text-sm">Dark Chocolate</span>
                  <span className="px-3 py-1 bg-cycleflow-mint bg-opacity-50 rounded-full text-sm">Spinach</span>
                  <span className="px-3 py-1 bg-cycleflow-peach bg-opacity-50 rounded-full text-sm">Avocados</span>
                  <span className="px-3 py-1 bg-cycleflow-blue bg-opacity-50 rounded-full text-sm">Almonds</span>
                </div>
                <Button 
                  onClick={goToDietaryRecommendations}
                  className="w-full bg-cycleflow-darkpurple hover:bg-primary flex items-center justify-center gap-2"
                >
                  See Full Recommendations
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Fitness Recommendations */}
          <Card className="border-cycleflow-darkpurple hover:shadow-lg transition-shadow">
            <CardHeader className="bg-cycleflow-blue rounded-t-lg">
              <CardTitle className="text-xl">Fitness Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  For your <span className="font-semibold">{cycleData.phase}</span>, gentle exercises are ideal as your energy levels may fluctuate.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cycleflow-purple bg-opacity-50 rounded-full text-sm">Gentle Yoga</span>
                  <span className="px-3 py-1 bg-cycleflow-lavender bg-opacity-50 rounded-full text-sm">Light Walking</span>
                  <span className="px-3 py-1 bg-cycleflow-pink bg-opacity-50 rounded-full text-sm">Swimming</span>
                  <span className="px-3 py-1 bg-cycleflow-mint bg-opacity-50 rounded-full text-sm">Stretching</span>
                </div>
                <Button 
                  onClick={goToFitnessRecommendations}
                  className="w-full bg-cycleflow-darkpurple hover:bg-primary flex items-center justify-center gap-2"
                >
                  See Full Recommendations
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}
