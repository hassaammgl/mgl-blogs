"use server";
import axios from "axios";

export const registerUser = async () => {
    try {
        const response = await axios.get(
            "http://localhost:3000/api"
        );

        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Registration failed with status: ${response.status}`);
        }

        return response.data;
    } catch (error) {
        // Proper error handling
        const errorMessage = error.response?.data?.message || error.message || 'Registration failed';
        console.error('Registration error:', errorMessage);
        throw new Error(errorMessage);
    }
}