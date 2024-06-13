// components/Spinner.tsx
import React from "react";
import { AtomSpinner } from "react-epic-spinners";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AtomSpinner color="#4A90E2" />
    </div>
  );
};

export default Spinner;
