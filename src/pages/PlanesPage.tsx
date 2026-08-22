import { useState } from "react";
import Plans from "../components/Plans";
import InquiryForm from "../components/InquiryForm";

export default function PlanesPage() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const formEl = document.getElementById("contacto");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="pt-8">
        <Plans onSelectPlan={handleSelectPlan} />
        <InquiryForm selectedPlan={selectedPlan} />
      </div>
    </>
  );
}
