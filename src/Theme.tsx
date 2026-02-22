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
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid #999999", // default line
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "1px solid #555555", // hover line
          },
          // &:after controls the animated line
          "&:after": {
            borderBottom: "2px solid #8290f3", // animated focus line color
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        standard: {
          color: "#333333", // text color
          "&:focus": {
            backgroundColor: "transparent", // keep transparent on focus
          },
        },
        icon: {
          color: "#8290f3", // arrow color
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#828ff347",
            "&:hover": {
              backgroundColor: "#828ff347",
            },
          }
        },
      },
    },
  },
});

export default customTheme;