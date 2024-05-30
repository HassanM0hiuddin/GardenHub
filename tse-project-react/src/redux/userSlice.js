import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        _id:"",
        userName:"",
        email:"",
        auth:false,
        role:""
    },

    reducers:{
        login:(state,action)=>{
            state._id = action.payload._id;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.auth = true;
            state.role = action.payload.role;
        },
        logout:(state)=>{
            state._id = "";
            state.userName = "";
            state.email = "";
            state.auth = false;
            state.role = "";
        },
        updateUser: (state, action) => {
            state._id = action.payload._id;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.auth = true;
            state.role = action.payload.role;


        }

    }
});

export const {login,logout,updateUser} = userSlice.actions;
export default userSlice.reducer;
