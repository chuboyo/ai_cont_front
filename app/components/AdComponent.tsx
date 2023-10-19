"use client";
import React from "react";
import { Adsense } from "@ctrl/react-adsense";

const AdComponent: React.FC = () => {
  return (
    <Adsense
      client="ca-pub-6571563457435209"
      slot="921533405"
      style={{ display: "block" }}
      layout="in-article"
      format="fluid"
    />
  );
};

export default AdComponent;
