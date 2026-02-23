import { AppBar, Avatar, Toolbar, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Clickable logo + app name using Router Link */}
        <Box
          component={RouterLink}  // MUI Box renders as a Router Link
          to="/"
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <Avatar alt="GoWander Logo" src="/AppLogo.png" />
          <Typography variant="h6" sx={{ userSelect: "none" }}>
            GoWander
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}