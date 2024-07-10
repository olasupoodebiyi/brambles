import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface WarningDialogProps {
  open: boolean;
  onDismiss: () => void;
  dismissButtonlabel: string;
}

export default function WarningDialog({
  open,
  onDismiss,
  dismissButtonlabel,
}: WarningDialogProps) {
  return (
    <Dialog open={open} onClose={onDismiss}>
      <DialogTitle>Invalid Cashier ID</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please select a valid cashier ID to view the sales dashboard.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDismiss}>{dismissButtonlabel}</Button>
      </DialogActions>
    </Dialog>
  );
}
