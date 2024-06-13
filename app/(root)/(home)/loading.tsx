"use client";

import Spinner from "@/components/ui/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="w-100vh h-100vh overflow-hidden bg-slate-400 flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
