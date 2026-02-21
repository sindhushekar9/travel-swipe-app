import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import Menu from "./Menu";

export default function Layout() {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Menu />
    </>
  );
}