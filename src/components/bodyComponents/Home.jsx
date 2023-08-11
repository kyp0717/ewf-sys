import React, { Component } from "react";
import { Box, Grid } from "@mui/material";

import UilReceipt from "@iconscout/react-unicons/icons/uil-receipt";
import UilBox from "@iconscout/react-unicons/icons/uil-box";
import UilTruck from "@iconscout/react-unicons/icons/uil-truck";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import InfoCard from "../subComponents/InfoCard";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cardComponent = [
      {
        icon: <UilBox size={60} color={"#F6F4EB"} />,
        title: "Picked",
        subTitle: "1256",
        mx: 5,
        my: 1,
      },
      {
        icon: <UilTruck size={60} color={"#F6F4EB"} />,
        title: "Shipped",
        subTitle: "12",
        mx: 5,
        my: 1,
      },
      {
        icon: <UilCheckCircle size={60} color={"#F6F4EB"} />,
        title: "Delivered",
        subTitle: "15",
        mx: 5,
        my: 1,
      },
      {
        icon: <UilReceipt size={60} color={"#F6F4EB"} />,
        title: "Invoice",
        subTitle: "07",
        mx: 5,
        my: 1,
      },
    ];

    return (
      <Box>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {cardComponent.map((card, index) => (
            <Grid item md={"3"} key={index}>
              <InfoCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}
