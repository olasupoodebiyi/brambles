import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useIsCashierIdValid, useSales } from "../hooks";
import { DISPATCH_ACTIONS } from "../constants";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { WarningDialog } from "../components";

const AddSalePage = () => {
  const { dispatch } = useSales();
  const navigate = useNavigate();

  const [saleAmount, setSaleAmount] = useState("");
  const [showInvalidCashierModal, setShowInvalidCashierModal] = useState(false);

  const { cashierId, isCashierIdValid } = useIsCashierIdValid();

  useEffect(() => {
    if (!isCashierIdValid) {
      setShowInvalidCashierModal(true);
    }
  }, [isCashierIdValid]);

  const handleAddSale = () => {
    if (saleAmount && !isNaN(Number(saleAmount))) {
      dispatch({
        type: DISPATCH_ACTIONS.ADD_SALE,
        payload: {
          cashierId,
          saleAmount: parseFloat(saleAmount),
        },
      });
      setSaleAmount("");
    }
  };

  const handleNavigateHome = () => {
    setShowInvalidCashierModal(false);
    navigate("/");
  };

  return (
    <>
      <WarningDialog
        open={showInvalidCashierModal}
        dismissButtonlabel="Back to cashiers list"
        onDismiss={handleNavigateHome}
      />
      <Button
        variant="contained"
        color="info"
        onClick={() => navigate(`/dashboard?cashierId=${cashierId}`)}
        startIcon={<ArrowBackIcon />}
      >
        Back to cashier: {cashierId}
      </Button>
      <TextField
        label="Sale Amount"
        value={saleAmount}
        onChange={(e) => setSaleAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddSale}>
        Add Sale
      </Button>
    </>
  );
};

export default AddSalePage;
