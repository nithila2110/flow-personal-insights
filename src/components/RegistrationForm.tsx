import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const dietaryPreferenceList = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Eggetarian",
  "Gluten-Free",
  "Dairy-Free",
  "Low FODMAP",
  "Low Carb / Keto",
  "Paleo",
  "Ayurvedic",
  "South Indian",
  "North Indian",
  "Jain",
  "Halal",
  "No Onion / No Garlic",
  "Intermittent Fasting",
  "No Preference"
];

const healthConditionList = [
  "PCOS (Polycystic Ovary Syndrome)",
  "Endometriosis",
  "Thyroid (Hypothyroidism/Hyperthyroidism)",
  "Anemia",
  "Diabetes (Type 1 or 2)",
  "Insulin Resistance",
  "IBS (Irritable Bowel Syndrome)",
  "Celiac Disease",
  "Acne or Hormonal Skin Issues",
  "PMS/PMDD (Premenstrual Syndrome / Dysphoric Disorder)",
  "Migraines",
  "Depression/Anxiety",
  "Fibroids",
  "Osteoporosis",
  "None"
];

export function RegistrationForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    lastPeriodDate: "",
    periodLength: "",
    cycleLength: "",
    dietaryPreferences: [] as string[],
    dietaryOther: "",
    healthConditions: [] as string[],
    healthOther: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setFormData((prev) => ({ ...prev, lastPeriodDate: format(selectedDate, "PPP") }));
    }
  };

  const handleCheckboxChange = (category: string, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[category as "dietaryPreferences" | "healthConditions"];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      
      return { ...prev, [category]: newValues };
    });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit the form
      navigate("/dashboard");
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cycleflow-lavender to-white p-4">
      <Card className="w-full max-w-md shadow-lg border-cycleflow-darkpurple">
        <CardHeader className="bg-cycleflow-purple rounded-t-lg">
          <CardTitle className="text-2xl text-center">CycleFlow</CardTitle>
          <CardDescription className="text-center">
            {step === 1 && "Let's get to know you"}
            {step === 2 && "Track your cycle"}
            {step === 3 && "Your preferences"}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="age">Age</Label>
                <Select onValueChange={(value) => handleSelectChange("age", value)}>
                  <SelectTrigger id="age">
                    <SelectValue placeholder="Select your age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 40 }, (_, i) => i + 10).map((age) => (
                      <SelectItem key={age} value={age.toString()}>
                        {age}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="gender">Gender (Optional)</Label>
                <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>First Day of Last Period</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 pointer-events-auto">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateChange}
                      initialFocus
                      className="p-3"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label htmlFor="periodLength">How Long Did Your Period Last?</Label>
                <Select onValueChange={(value) => handleSelectChange("periodLength", value)}>
                  <SelectTrigger id="periodLength">
                    <SelectValue placeholder="Select number of days" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((days) => (
                      <SelectItem key={days} value={days.toString()}>
                        {days} day{days > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="cycleLength">Usual Cycle Length</Label>
                <Select onValueChange={(value) => handleSelectChange("cycleLength", value)}>
                  <SelectTrigger id="cycleLength">
                    <SelectValue placeholder="Select cycle length" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 15 }, (_, i) => i + 21).map((days) => (
                      <SelectItem key={days} value={days.toString()}>
                        {days} days
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Dietary Preferences</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {dietaryPreferenceList.map((preference) => (
                    <div key={preference} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`diet-${preference}`} 
                        checked={formData.dietaryPreferences.includes(preference)}
                        onCheckedChange={() => handleCheckboxChange("dietaryPreferences", preference)}
                      />
                      <Label htmlFor={`diet-${preference}`} className="cursor-pointer">{preference}</Label>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Label htmlFor="dietaryOther" className="block mb-1">Other (please specify)</Label>
                  <Input
                    id="dietaryOther"
                    name="dietaryOther"
                    value={formData.dietaryOther}
                    onChange={handleChange}
                    placeholder="Enter any unique dietary preference"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Health Conditions (Optional)</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {healthConditionList.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`health-${condition}`} 
                        checked={formData.healthConditions.includes(condition)}
                        onCheckedChange={() => handleCheckboxChange("healthConditions", condition)}
                      />
                      <Label htmlFor={`health-${condition}`} className="cursor-pointer">{condition}</Label>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Label htmlFor="healthOther" className="block mb-1">Other (please specify)</Label>
                  <Input
                    id="healthOther"
                    name="healthOther"
                    value={formData.healthOther}
                    onChange={handleChange}
                    placeholder="Enter any other health condition"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          
          <Button 
            onClick={nextStep}
            className="bg-cycleflow-darkpurple hover:bg-primary"
          >
            {step < 3 ? "Next" : "Submit"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
