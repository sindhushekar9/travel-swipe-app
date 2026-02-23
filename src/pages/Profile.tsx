import {
    Box,
    TextField,
    Button,
    Stack,
    Snackbar,
    Alert,
} from "@mui/material";
import { useState } from "react";

export default function Profile() {

    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 152px)",
                bgcolor: "#f5f5f5",
                p: 3,
                mt: 8,
                gap: 3,
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", sm: "450px" },
                    bgcolor: "#fff",
                    borderRadius: 3,
                    p: 3,
                    boxShadow: 3,
                    mx: "auto",
                }}
            >

                <Stack spacing={2}>
                    <TextField
                        label="Name"
                        defaultValue="John Doe"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        label="Email"
                        defaultValue="john.doe@example.com"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        label="Member Since"
                        defaultValue="Jan 2022"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        defaultValue="password123"
                        fullWidth
                        variant="outlined"
                    />
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    mt={4}
                    justifyContent="space-between"
                >
                    <Button variant="contained" color="primary" fullWidth onClick={() => setOpen(true)}>
                        Update
                    </Button>
                    <Button variant="outlined" color="error" fullWidth onClick={() => setOpen(true)}>
                        Close
                    </Button>
                </Stack>
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert
                    onClose={() => setOpen(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    This is a success Alert inside a Snackbar!
                </Alert>
            </Snackbar>
        </Box>
    );
}