import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function useIsCashierIdValid() {
  const query = useQuery();
  const cashierId = Number(query.get("cashierId")) || 0;

  const isCashierIdValid = useMemo(() => {
    return cashierId >= 1 && cashierId <= 3;
  }, [cashierId]);

  return { cashierId, isCashierIdValid };
}

export default useIsCashierIdValid;
