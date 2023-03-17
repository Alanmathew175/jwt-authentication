import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Container,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const notifiaction = (message) => {
        if (message === "Login Successfull") {
            toast.success(message, {
                position: toast.POSITION.BOTTOM_LEFT,
            });
        } else {
            toast.error(message, {
                position: toast.POSITION.BOTTOM_LEFT,
            });
        }
    };
    const handleSubmit = async () => {
        try {
            if (email && password) {
                const data = { email, password };

                const response = await axios.post("/", data);

                if (response.data.token) {
                  notifiaction("Login Successfull")
                    localStorage.setItem("token", response.data.token);
                   
                }
            } else {
                notifiaction("All fields are required");
            }
        } catch (error) {
        
          notifiaction(error.response.data.error);
        
          
      }
       
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/posts", { replace: true });
        }
    });
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 3,
            }}
        >
            <Box>
                <Stack
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Typography sx={{ marginX: "auto" }}>Login</Typography>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleSubmit}>
                        Login
                    </Button>
                    <ToastContainer />
                    <Stack>
                        <Typography variant="body2">
                            Don't have an account?
                        </Typography>

                        <Link to="/register">Register</Link>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
};

export default Login;
