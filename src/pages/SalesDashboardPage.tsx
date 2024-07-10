import {
  Box,
  Avatar,
  Card,
  Button,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SalesCharts, WarningDialog } from "../components";
import { useIsCashierIdValid, useSales } from "../hooks";
import { deepOrange } from "@mui/material/colors";

import Add from "@mui/icons-material/Add";
import LoopIcon from "@mui/icons-material/Loop";

const SalesDashboardPage = () => {
  const { state } = useSales();
  const navigate = useNavigate();

  const [showInvalidCashierModal, setShowInvalidCashierModal] = useState(false);

  const { cashierId, isCashierIdValid } = useIsCashierIdValid();

  useEffect(() => {
    if (!isCashierIdValid) {
      setShowInvalidCashierModal(true);
    }
  }, [isCashierIdValid]);

  const handleNavigateHome = () => {
    setShowInvalidCashierModal(false);
    navigate("/");
  };

  const totalSales = state.sales
    .filter((sale) => sale.cashierId === cashierId)
    .reduce((sum, sale) => sum + sale.saleAmount, 0);

  return (
    <>
      <WarningDialog
        open={showInvalidCashierModal}
        dismissButtonlabel="Back to cashiers list"
        onDismiss={handleNavigateHome}
      />

      <Stack
        spacing={1}
        direction="row"
        width="100%"
        sx={{ justifyContent: "flex-end", marginBottom: 2 }}
      >
        <Avatar sx={{ bgcolor: deepOrange[500], width: 24, height: 24 }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="body1" align="left">
          Cashier {cashierId}
        </Typography>
      </Stack>

      <Card>
        <CardContent>
          <SalesCharts />
          <Typography variant="h5">
            Total Sales: ${totalSales.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 2,
        }}
      >
        <Button
          variant="contained"
          color="info"
          onClick={handleNavigateHome}
          startIcon={<LoopIcon />}
        >
          Switch Cashier
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/add-sale?cashierId=${cashierId}`)}
          startIcon={<Add />}
        >
          Add Sale
        </Button>
      </Box>
    </>
  );
};

export default SalesDashboardPage;
