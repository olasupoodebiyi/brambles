import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { cashiers } from "../data/mock-data";

const SelectCashierPage = () => {
  const navigate = useNavigate();

  const selectCashier = (id: number) => {
    localStorage.setItem("selectedCashier", id.toString());
    navigate(`/dashboard?cashierId=${id}`);
  };

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ padding: "10px", marginBottom: 2, width: "100%" }}
      >
        Select Cashier
      </Typography>

      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.07)",
          borderRadius: "10px",
          padding: 0,
          margin: 0,
          border: "1px solid rgba(0, 0, 0, 0.24)",
          width: "100%",
          "& .MuiListItemButton-root:not(:last-child)": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <List sx={{ padding: 0, overflow: "hidden" }}>
          {cashiers.map((cashier) => (
            <ListItemButton
              key={cashier.id}
              onClick={() => selectCashier(cashier.id)}
              // sx={{ borderBottom: "1px solid gray" }}
            >
              <ListItemText primary={cashier.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );
};

export default SelectCashierPage;
