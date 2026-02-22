import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import Menu from "./Menu";
import '../App.css';

export default function Layout() {
  return (
    <>
      <Header />
      <Box className="app-parent-container">
        <Outlet />
      </Box>
      <Menu />
    </>
  );
}