import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

export default function Register() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [signEmail, setSIgnEmail] = useState("");
  const [signPwd, setSignPwd] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPwd, setRegPwd] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    console.log(fName, lName, regEmail, regPwd)
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          borderRightStyle: "solid",
          borderWidth: "2px",
          borderColor: "#bcbcbc",
        }}
      >
        <TextField sx={{ margin: 2 }} required id="signinEmail" label="Email" />
        <TextField
          sx={{ margin: 2 }}
          type="password"
          required
          id="signinPwd"
          label="Password"
        />
        <Button
          sx={{ width: "auto", margin: 2, borderColor: "#fdb245" }}
          variant="outlined"
        >
          Sign-In
        </Button>
      </div>
      <form onSubmit={handleRegister}>
        <div
          style={{ display: "flex", padding: "20px", flexDirection: "column" }}
        >
          <div style={{ display: "flex" }}>
            <TextField
              onChange={(e) => setFName(e.target.value)}
              sx={{ margin: 2 }}
              required
              id="fName"
              label="First Name"
            />
            <TextField
              onChange={(e) => setLName(e.target.value)}
              sx={{ margin: 2 }}
              required
              id="lName"
              label="Last Name"
            />
          </div>
          <TextField
            onChange={(e) => setRegEmail(e.target.value)}
            sx={{ margin: 2 }}
            type="email"
            required
            id="regEmail"
            label="Email"
          />
          <TextField
            onChange={(e) => setRegPwd(e.target.value)}
            sx={{ margin: 2 }}
            type="password"
            required
            id="regPwd"
            label="Password"
          />
          <Button
            sx={{ width: "auto", margin: 2, borderColor: "#fdb245" }}
            variant="outlined"
            type="submit"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
