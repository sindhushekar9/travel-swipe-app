import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#222222",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#000000",
            color: "#ffffff"
          },
          "&.Mui-focusVisible": {
            backgroundColor: "#222222",
            color: "#fff",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#8290f3",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "&.active": {
            color: "#8290f3",

            "& .MuiSvgIcon-root": {
              fontWeight: 600,
            },
          },
        },
      },
    }
  },
});

export default customTheme;