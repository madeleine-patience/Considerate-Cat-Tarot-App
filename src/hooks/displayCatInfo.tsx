import React from "react";
import { useState } from "react";
import ICatProps from "../../types/CatProps";
function useDisplayCatInfo() {
  const [showCatInfo, setShowCatInfo] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState(0);

  function handleShowCatInfo(data: any) {
    setShowCatInfo(!showCatInfo);
    setSelectedCatId(data.id);
  }
  return [showCatInfo, selectedCatId, handleShowCatInfo] as const;
}

export default useDisplayCatInfo;
