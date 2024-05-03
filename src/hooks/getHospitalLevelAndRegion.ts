import { useState, useEffect } from "react";
import { reqHospitalLevelAndRegion } from "@/API/home";
import type { HospitalLevelAndRegionArr } from "@/API/home/type";

function useHospitalLevelAndRegion(dictCode: string): {
  hospitalLevelAndRegion: HospitalLevelAndRegionArr;
  setHospitalLevelAndRegion: React.Dispatch<
    React.SetStateAction<HospitalLevelAndRegionArr>
  >;
} {
  const [hospitalLevelAndRegion, setHospitalLevelAndRegion] =
    useState<HospitalLevelAndRegionArr>([]);

  useEffect(() => {
    try {
      reqHospitalLevelAndRegion(dictCode).then((result) => {
        setHospitalLevelAndRegion(result.data);
      });
    } catch (e) {
      // TODO handle the exception
      console.log(e);
    }
  }, [dictCode]);

  return {
    hospitalLevelAndRegion,
    setHospitalLevelAndRegion,
  };
}

export default useHospitalLevelAndRegion;
