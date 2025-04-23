
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatBot } from "@/components/ChatBot";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DietaryRecommendations() {
  const navigate = useNavigate();
  const currentPhase = "Luteal Phase";
  
  // Sample recipes
  const recipes = [
    {
      title: "Magnesium-Packed Salad",
      ingredients: ["Spinach", "Avocado", "Almonds", "Olive oil", "Lemon juice"],
      steps: "Mix all ingredients in a bowl. Drizzle with olive oil and lemon juice.",
      benefits: "High in magnesium to reduce cramps and mood swings."
    },
    {
      title: "Dark Chocolate Smoothie",
      ingredients: ["Banana", "Dark chocolate", "Almond milk", "Chia seeds"],
      steps: "Blend all ingredients until smooth. Serve chilled.",
      benefits: "Provides mood-boosting compounds and essential nutrients."
    },
    {
      title: "Avocado Toast with Seeds",
      ingredients: ["Whole grain bread", "Avocado", "Pumpkin seeds", "Sea salt"],
      steps: "Toast bread, mash avocado on top, and sprinkle with seeds and salt.",
      benefits: "Healthy fats and magnesium help regulate hormones."
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
          <CardHeader className="bg-cycleflow-mint rounded-t-lg">
            <CardTitle className="text-2xl md:text-3xl">Dietary Recommendations for {currentPhase}</CardTitle>
            <CardDescription>
              Personalized nutrition advice for your current cycle phase
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Explanation Section */}
              <div className="p-5 bg-cycleflow-peach/30 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Why It Matters</h3>
                <p>
                  During the <span className="font-semibold">Luteal Phase</span>, your body requires more magnesium 
                  to ease PMS symptoms like mood swings and cramps. Your metabolism also increases, requiring 
                  more calories (about 100-300 more per day) to maintain energy levels.
                </p>
              </div>
              
              {/* Food Suggestions */}
              <div>
                <h3 className="text-xl font-medium mb-4">Recommended Foods</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    { name: "Dark Chocolate", benefit: "Magnesium & serotonin" },
                    { name: "Spinach", benefit: "Magnesium & iron" },
                    { name: "Avocados", benefit: "Healthy fats & B6" },
                    { name: "Almonds", benefit: "Magnesium & protein" },
                    { name: "Bananas", benefit: "Vitamin B6 & potassium" },
                    { name: "Pumpkin Seeds", benefit: "Zinc & magnesium" },
                    { name: "Sweet Potatoes", benefit: "Complex carbs & B6" },
                    { name: "Salmon", benefit: "Omega-3s & vitamin D" }
                  ].map((food, index) => (
                    <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-medium mb-1">{food.name}</p>
                      <p className="text-xs text-gray-600">{food.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recipe Section */}
              <div>
                <h3 className="text-xl font-medium mb-4">Recommended Recipes</h3>
                <div className="space-y-4">
                  {recipes.map((recipe, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-cycleflow-yellow/30 py-3">
                        <CardTitle className="text-lg">{recipe.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-sm">Ingredients:</h4>
                            <ul className="list-disc pl-5 text-sm">
                              {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Instructions:</h4>
                            <p className="text-sm">{recipe.steps}</p>
                          </div>
                          <div className="bg-cycleflow-pink/20 p-2 rounded-md">
                            <h4 className="font-medium text-sm">Benefits:</h4>
                            <p className="text-sm">{recipe.benefits}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Next Steps */}
              <div className="p-5 bg-cycleflow-purple/30 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Next Steps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-cycleflow-darkpurple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                    <span>Track your symptoms daily to see how dietary changes affect your cycle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cycleflow-darkpurple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                    <span>Drink at least 8 cups of water daily to stay hydrated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cycleflow-darkpurple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                    <span>Consider taking a magnesium supplement (consult with your doctor first)</span>
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
