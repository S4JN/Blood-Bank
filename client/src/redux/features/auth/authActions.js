import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { rejectWithValue }) => {
        try {

            const { data } = await API.post("/auth/login", { role, email, password })
            //store token that is generated
            if (data.success) {
                localStorage.setItem("token", data.token)
                toast.success(data.message);
            }
            if (!data.success) {
                console.log(data);
            }
            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const userRegister = createAsyncThunk(
    "auth/register",
    async ({ name, password, email, phoneNumber, address, role}, { rejectWithValue }) => {
        console.log(email);
        try {
            const { data } = await API.post("/auth/register", { name, password, email, phoneNumber, address, role })
            console.log(data);
            if (data.success) {
                toast.success(data.message);
                window.location.replace("/login");
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

