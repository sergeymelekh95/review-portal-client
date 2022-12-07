import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk(
    '@@auth/signUp',
    async (creads, { extra: { client, api }, rejectWithValue }) => {
        try {
            const res = await client.post(api.signUp(), creads);
            return res;
        } catch (error) {
            const message = error.response.data.message || error.toString();
            return rejectWithValue(message);
        }
    }
);

export const signIn = createAsyncThunk(
    '@@auth/signIn',
    async (creads, { extra: { client, api }, rejectWithValue }) => {
        console.log(creads);
        try {
            const res = await client.post(api.signIn(), creads);
            return res;
        } catch (error) {
            const message = error.response.data.message || error.toString();
            return rejectWithValue(message);
        }
    }
);

const initialState = {
    status: 'idle',
    error: null,
    username: null,
    token: null,
    email: null,
    roles: [],
};

const authSlice = createSlice({
    name: '@@auth',
    initialState,
    reducers: {
        update: (state, payload) => {
            return {
                ...state,
                status: initialState.status,
                error: initialState.error,
            };
        },
        logOut: (state) => {
            return {
                ...state,
                username: initialState.username,
                token: initialState.token,
                email: initialState.email,
                roles: initialState.roles,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = 'received';
            })
            .addCase(signIn.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(signIn.fulfilled, (state, { payload }) => {
                const { username, email, roles, token } = payload.data;

                state.status = 'received';
                state.username = username;
                state.token = token;
                state.email = email;
                state.roles = roles;
            });
    },
});

//actions
export const { update, logOut } = authSlice.actions;

//reducers
export const authReducer = authSlice.reducer;

//selectors
export const selectAuthInfo = (state) => ({
    status: state.auth.status,
    error: state.auth.error,
    username: state.auth.username,
    email: state.auth.email,
    token: state.auth.token,
    roles: state.auth.roles,
});
