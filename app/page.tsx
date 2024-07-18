
import { Button } from "@mui/material";
import Link from "next/link";
import styled from "styled-components"

export default function Page() {
 
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "10%"}}>
      <Button variant="contained" size="large" style={{marginRight: "10px"}}>
        <Link href="/login">login</Link>
      </Button>
      <Button variant="outlined" size="large">
        <Link href="/register">register</Link>
      </Button>
    </div>
  )
}
