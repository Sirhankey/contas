import React from "react";
import '../settingStyle/contasGrid.css'
import BasicCard from "./utils/basicCard";
import { Container } from "@mui/material";
import { useMediaQuery } from 'react-responsive';

const Grid = ({ contas }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const conta_container = {
    'margin-bottom': '20px'
  }

  return (

    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
      {contas.map(conta => (
        <Container style={conta_container}>
          <BasicCard conta={conta} />
        </Container>
      ))}
    </div>
  );
};


export default Grid;
