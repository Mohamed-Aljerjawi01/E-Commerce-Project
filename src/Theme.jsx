// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: 'dark', // مهم جدًا
//     primary: {
//       main: "#1966d2",
//     },
//     // secondary: {
//     //   main: "#9c27b0",
//     // },
//     // background: {
//     //   default: "#f5f5f5",
//     // },
//   },
// //   typography: {
// //     fontFamily: "Cairo, Arial",
// //     h1: {
// //       fontSize: "2.2rem",
// //       fontWeight: 700,
// //     },
// //   },
// //   shape: {
// //     borderRadius: 8,
// //   },
// });

// export default theme;


import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode, // مهم جدًا
    //   primary: {
    //     main: mode === "dark" ? "#90caf9" : "#1976d2",
    //   },
    //   background: {
    //     default: mode === "dark" ? "#121212" : "#f5f5f5",
    //     paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
    //   },
    },
    // typography: {
    //   fontFamily: "Cairo, Arial",
    // },
  });

export default getTheme;
