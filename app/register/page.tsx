'use client'
import { Input, Button } from '@mui/material';
import Link from "next/link";

export default function Register() {
    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: "10%", marginLeft: "20%", flexFlow: "column wrap"}}>
        <Input type="text" placeholder="Name/Nick" style={{width: "200px"}} />
        <Input type="date" placeholder="Age" style={{width: "200px"}} />
        <Input type="text" placeholder="Login" style={{width: "200px"}} />
        <Input type="text" placeholder="Password" style={{width: "200px"}} />
        <Button variant="outlined" size="small" style={{width: "100px", padding: "0", marginTop: "10px"}}>
          <Link href="../home" style={{width: "100%"}}>Create account</Link>
        </Button>
    </div>
    )
  }