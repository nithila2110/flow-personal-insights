
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HealthcareAssistant() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cycleflow-lavender to-white p-4">
      <Card className="w-full max-w-xl shadow-xl border-cycleflow-darkpurple">
        <div className="bg-cycleflow-purple rounded-t-lg p-5 flex items-center gap-4 border-b">
          <div className="h-10 w-10 rounded-full bg-cycleflow-lavender flex items-center justify-center font-semibold text-primary text-lg">CM</div>
          <h2 className="text-lg font-bold text-primary">CycleMate Healthcare Assistant</h2>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {/* User message */}
          <div className="flex items-end gap-3">
            <div className="flex-1"></div>
            <div className="max-w-xs rounded-lg border border-cycleflow-darkpurple bg-cycleflow-darkpurple text-white p-3">
                <span className="text-base">I'm feeling really bloated and crampy today. Any tips?</span>
            </div>
          </div>
          {/* Bot message */}
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-cycleflow-lavender flex items-center justify-center text-xs font-bold">CM</div>
            <div className="max-w-[85%] rounded-lg border bg-cycleflow-lavender text-gray-800 p-4">
              <div className="mb-2 text-base">
                Thanks for sharing. Since you're in your <span className="font-bold">Luteal Phase</span> and have <span className="font-bold">PCOS</span>, bloating and cramps can be more intense. Let’s look at some South Indian-friendly ways to manage that!
              </div>
              <div className="my-2 font-semibold">🫶 Diet Tips (South Indian Style):</div>
              <ul className="space-y-1 ml-2 mb-3">
                <li>🍛 <span className="font-medium">Lemon rasam</span> – Light and soothing, helps reduce bloating</li>
                <li>🍚 <span className="font-medium">Red rice or brown rice pongal</span> – Gentle on the stomach and rich in fiber</li>
                <li>🥥 <span className="font-medium">Vegetable avial</span> – High in magnesium and fiber, great for cramps</li>
                <li>🥭 <span className="font-medium">Buttermilk with curry leaves & asafoetida</span> – Helps with digestion and reduces gas</li>
              </ul>
              <a
                href="#"
                className="text-primary underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 See full South Indian meal plan for the Luteal Phase
              </a>
              <div className="my-3 font-semibold flex items-center gap-2">🧘 Want to do a short yoga session focused on bloating relief?</div>
              <div>
                I have a 10-minute gentle yoga video with poses like <span className="font-bold">Apanasana</span> and <span className="font-bold">Supta Matsyendrasana</span> that can really help.
              </div>
              <a
                href="#"
                className="text-primary underline font-medium block mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Start Yoga Routine
              </a>
              <div className="mt-4">
                <span className="font-semibold">💧 Extra Tip:</span>{" "}
                Sip on warm water with a pinch of <span className="font-medium">jeera (cumin)</span> or <span className="font-medium">ajwain</span> after meals—it’s great for easing bloating!
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4 border-t">
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="hover:bg-cycleflow-peach"
          >
            Return to Dashboard
          </Button>
        </div>
      </Card>
    </div>
  );
}
