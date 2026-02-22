import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar alt="Remy Sharp" src="/AppLogo.png" />
        <Typography variant="h6">
          GoWander
        </Typography>
      </Toolbar>
    </AppBar>
  );
}