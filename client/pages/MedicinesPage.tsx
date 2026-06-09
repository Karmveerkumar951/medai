import { useState } from "react";
import { motion } from "framer-motion";
import { Search, AlertCircle } from "lucide-react";

interface Medicine {
  id: number;
  name: string;
  uses: string[];
  dosage: string;
  sideEffects: string[];
  precautions: string[];
  interactions: string[];
  type: string;
}

const medicines: Medicine[] = [
{
id: 1,
name: "Paracetamol",
type: "Pain Reliever & Fever Reducer",
uses: ["Fever", "Headache", "Body pain"],
dosage: "500-1000 mg every 4-6 hours",
sideEffects: ["Nausea", "Rare liver damage"],
precautions: ["Avoid overdose", "Limit alcohol use"],
interactions: ["Warfarin"],
},
{
id: 2,
name: "Ibuprofen",
type: "NSAID",
uses: ["Pain", "Inflammation", "Fever"],
dosage: "200-400 mg every 4-6 hours",
sideEffects: ["Stomach upset", "Heartburn"],
precautions: ["Take after food"],
interactions: ["Aspirin", "Blood thinners"],
},
{
id: 3,
name: "Cetirizine",
type: "Antihistamine",
uses: ["Allergies", "Sneezing", "Itching"],
dosage: "10 mg daily",
sideEffects: ["Drowsiness"],
precautions: ["Avoid driving if sleepy"],
interactions: ["Alcohol"],
},
{
id: 4,
name: "ORS",
type: "Electrolyte Replacement",
uses: ["Dehydration", "Diarrhea"],
dosage: "As directed",
sideEffects: ["Rare bloating"],
precautions: ["Use clean water"],
interactions: ["None significant"],
},
{
id: 5,
name: "Pantoprazole",
type: "Proton Pump Inhibitor",
uses: ["Acidity", "GERD", "Ulcers"],
dosage: "20-40 mg daily",
sideEffects: ["Headache"],
precautions: ["Take before food"],
interactions: ["Ketoconazole"],
},
{
id: 6,
name: "Vitamin D3",
type: "Supplement",
uses: ["Bone health", "Deficiency treatment"],
dosage: "1000-2000 IU daily",
sideEffects: ["Rare toxicity"],
precautions: ["Follow dosage"],
interactions: ["Corticosteroids"],
},
{
id: 7,
name: "Vitamin C",
type: "Supplement",
uses: ["Immunity support", "Vitamin deficiency"],
dosage: "500-1000 mg daily",
sideEffects: ["Stomach discomfort"],
precautions: ["Do not exceed dose"],
interactions: ["Aluminum antacids"],
},
{
id: 8,
name: "Zinc",
type: "Supplement",
uses: ["Immune support", "Wound healing"],
dosage: "10-20 mg daily",
sideEffects: ["Nausea"],
precautions: ["Avoid excess use"],
interactions: ["Antibiotics"],
},
{
id: 9,
name: "Amoxicillin",
type: "Antibiotic",
uses: ["Bacterial infections"],
dosage: "As prescribed",
sideEffects: ["Diarrhea", "Rash"],
precautions: ["Complete full course"],
interactions: ["Warfarin"],
},
{
id: 10,
name: "Azithromycin",
type: "Antibiotic",
uses: ["Respiratory infections"],
dosage: "As prescribed",
sideEffects: ["Nausea"],
precautions: ["Prescription only"],
interactions: ["Antacids"],
},
{
id: 11,
name: "Metformin",
type: "Anti-Diabetic",
uses: ["Type 2 Diabetes"],
dosage: "500-1000 mg daily",
sideEffects: ["Stomach upset"],
precautions: ["Take with food"],
interactions: ["Alcohol"],
},
{
id: 12,
name: "Aspirin",
type: "Blood Thinner",
uses: ["Heart protection", "Pain relief"],
dosage: "75-325 mg daily",
sideEffects: ["Bleeding risk"],
precautions: ["Use under medical advice"],
interactions: ["Ibuprofen"],
},
{
id: 13,
name: "Levocetirizine",
type: "Antihistamine",
uses: ["Allergy relief"],
dosage: "5 mg daily",
sideEffects: ["Drowsiness"],
precautions: ["Avoid alcohol"],
interactions: ["Sedatives"],
},
{
id: 14,
name: "Salbutamol",
type: "Bronchodilator",
uses: ["Asthma", "Breathing difficulty"],
dosage: "As prescribed",
sideEffects: ["Tremors"],
precautions: ["Use inhaler correctly"],
interactions: ["Beta blockers"],
},
{
id: 15,
name: "Montelukast",
type: "Anti-Allergic",
uses: ["Asthma", "Allergic rhinitis"],
dosage: "10 mg daily",
sideEffects: ["Headache"],
precautions: ["Prescription recommended"],
interactions: ["Phenobarbital"],
},
{
id: 16,
name: "Loperamide",
type: "Anti-Diarrheal",
uses: ["Diarrhea"],
dosage: "As directed",
sideEffects: ["Constipation"],
precautions: ["Avoid in severe infections"],
interactions: ["Ritonavir"],
},
{
id: 17,
name: "Domperidone",
type: "Antiemetic",
uses: ["Nausea", "Vomiting"],
dosage: "As prescribed",
sideEffects: ["Dry mouth"],
precautions: ["Medical advice required"],
interactions: ["Ketoconazole"],
},
{
id: 18,
name: "Diclofenac",
type: "NSAID",
uses: ["Joint pain", "Muscle pain"],
dosage: "50 mg as prescribed",
sideEffects: ["Stomach irritation"],
precautions: ["Take after meals"],
interactions: ["Blood thinners"],
},
{
id: 19,
name: "Calcium Tablets",
type: "Supplement",
uses: ["Bone health"],
dosage: "500-1000 mg daily",
sideEffects: ["Constipation"],
precautions: ["Take with meals"],
interactions: ["Iron supplements"],
},
{
id: 20,
name: "Folic Acid",
type: "Vitamin Supplement",
uses: ["Anemia prevention"],
dosage: "400 mcg daily",
sideEffects: ["Rare"],
precautions: ["Follow doctor's advice"],
interactions: ["Methotrexate"],
},
{
id: 21,
name: "Iron Tablets",
type: "Supplement",
uses: ["Iron deficiency anemia"],
dosage: "As prescribed",
sideEffects: ["Constipation"],
precautions: ["Take with Vitamin C"],
interactions: ["Calcium"],
},
{
id: 22,
name: "Dolo 650",
type: "Pain Reliever",
uses: ["Fever", "Body pain"],
dosage: "650 mg as needed",
sideEffects: ["Rare liver issues"],
precautions: ["Do not overdose"],
interactions: ["Warfarin"],
},
{
id: 23,
name: "Crocin",
type: "Pain Reliever",
uses: ["Fever", "Headache"],
dosage: "As directed",
sideEffects: ["Rare nausea"],
precautions: ["Avoid excess use"],
interactions: ["Warfarin"],
},
{
id: 24,
name: "Benadryl",
type: "Cough Syrup",
uses: ["Cough", "Cold symptoms"],
dosage: "As directed",
sideEffects: ["Drowsiness"],
precautions: ["Avoid driving"],
interactions: ["Alcohol"],
},
{
id: 25,
name: "Digene",
type: "Antacid",
uses: ["Acidity", "Indigestion"],
dosage: "As directed",
sideEffects: ["Loose stools"],
precautions: ["Do not overuse"],
interactions: ["Certain antibiotics"],
}
];


export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Medicine Guide</span>
            <span className="text-foreground"> Database</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive information about medicines, usage, and precautions
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search for medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border-2 border-cyan-200/50 rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
            />
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Medicine List */}
          <div className="lg:col-span-1">
            {filteredMedicines.length > 0 ? (
              <motion.div
                variants={containerVariants}
                className="space-y-4"
              >
                {filteredMedicines.map((med) => (
                  <motion.button
                    key={med.id}
                    variants={itemVariants}
                    onClick={() => setSelectedMedicine(med)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedMedicine?.id === med.id
                        ? "glass-effect border-cyan-400/50 bg-cyan-50/50"
                        : "glass-effect border-cyan-200/30 hover:border-cyan-300/50"
                    }`}
                  >
                    <p className="font-bold text-foreground">{med.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {med.type}
                    </p>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <div className="glass-effect p-8 rounded-lg text-center">
                <p className="text-muted-foreground">No medicines found</p>
              </div>
            )}
          </div>

          {/* Medicine Details */}
          <div className="lg:col-span-2">
            {selectedMedicine ? (
              <motion.div
                key={selectedMedicine.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-effect rounded-2xl border border-cyan-200/50 p-8 sticky top-32"
              >
                {/* Header */}
                <div className="mb-6 pb-6 border-b border-cyan-200/30">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {selectedMedicine.name}
                  </h2>
                  <p className="text-teal-700 font-semibold">
                    {selectedMedicine.type}
                  </p>
                </div>

                {/* Uses */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Uses
                  </h3>
                  <ul className="space-y-2">
                    {selectedMedicine.uses.map((use, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-cyan-500 font-bold">✓</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dosage */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Dosage
                  </h3>
                  <p className="text-sm bg-teal-50/50 p-3 rounded-lg border border-teal-200/30">
                    {selectedMedicine.dosage}
                  </p>
                </div>

                {/* Side Effects */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Side Effects
                  </h3>
                  <ul className="space-y-2">
                    {selectedMedicine.sideEffects.map((effect, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Precautions */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Precautions
                  </h3>
                  <ul className="space-y-2">
                    {selectedMedicine.precautions.map((precaution, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-orange-500 font-bold">!</span>
                        <span>{precaution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactions */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Drug Interactions
                  </h3>
                  <p className="text-sm text-muted-foreground bg-yellow-50/50 p-3 rounded-lg border border-yellow-200/30">
                    {selectedMedicine.interactions.join(", ")}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-4 bg-yellow-100/30 border border-yellow-200/50 rounded-lg text-xs text-yellow-700">
                  <p className="font-semibold mb-1">⚠️ Important Disclaimer</p>
                  <p>
                    This information is educational only. Always consult a
                    healthcare provider before taking any medication.
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="glass-effect rounded-2xl border border-cyan-200/50 p-12 text-center h-96 flex items-center justify-center">
                <p className="text-muted-foreground text-lg">
                  Select a medicine to view details
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
