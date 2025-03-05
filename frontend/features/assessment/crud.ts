import { RAssessment, WAssessment } from "@/constants/Types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/assessments";

const initialState = {
    assessments: [],
    assessment: {},
    status: "idle",
    error: null,
};

export const newAssessment = createAsyncThunk(
    "assessments/new",
    async (formData: WAssessment) => {
        try {
            const response = await axios.post(BASE_URL, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(
                "Returned response after beat creation: ",
                response.data
            );
            return response.data;
        } catch (err) {
            console.log(err);
            throw err.response?.data || err.message;
        }
    }
);

export const fetchAssessments = createAsyncThunk(
    "assessments/fetch",
    async () => {
        try {
            console.log("fetching assessments");
            const response = await axios.get(BASE_URL);
            console.log(
                "Returned response assessments are fetched : ",
                response.data
            );
            return response.data;
        } catch (err) {
            console.log(err);
            throw err.response?.data || err.message;
        }
    }
);

const assessmentSlice = createSlice({
    name: "assessment",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // fetch cases
            .addCase(fetchAssessments.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchAssessments.fulfilled, (state, action) => {
                state.assessments = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchAssessments.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })

            // creating cases
            .addCase(newAssessment.pending, (state) => {
                state.status = "loading";
            })
            .addCase(newAssessment.fulfilled, (state, action) => {
                state.assessment = action.payload;
                state.status = "succeeded";
            })
            .addCase(newAssessment.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            });

        // Deleting cases
    },
});

export default assessmentSlice.reducer;

export const beatStatus = (state: { status: any }) => state.status;
export const beatError = (state: { error: any }) => state.error;
