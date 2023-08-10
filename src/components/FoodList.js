import { Image, Margin } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";

export default function FoodList() {
  const [quantity, setQuantity] = useState(0);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="FoodList">
      <div style={{ padding: "0px 50px" }}>
        <Card sx={{ maxwidth: "500" }} style={{ paddingTop: "20px" }}>
          <CardActionArea style={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt="food"
              height="160"
            />
            <CardContent>
              <Typography noWrap variant="h6">
                Restaurant Name
              </Typography>
              <Typography component="legend">
                {" "}
                Rating: <Rating readOnly precision={0.1} value={3.4} />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxwidth: "500" }} style={{ paddingTop: "20px" }}>
          <CardActionArea style={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt="food"
              height="160"
            />
            <CardContent>
              <Typography noWrap variant="h6">
                Restaurant Name
              </Typography>
              <Typography component="legend">
                {" "}
                Rating: <Rating readOnly precision={0.1} value={3.4} />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxwidth: "500" }} style={{ paddingTop: "20px" }}>
          <CardActionArea style={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt="food"
              height="160"
            />
            <CardContent>
              <Typography noWrap variant="h6">
                Restaurant Name
              </Typography>
              <Typography component="legend">
                {" "}
                Rating: <Rating readOnly precision={0.1} value={3.4} />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Card
        sx={{ maxwidth: "500" }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          loading="true"
          height="300"
          width="500"
          fit="cover"
        />
        <div style={{ display: "flex", padding: "20px", alignItems: "center" }}>
          <Typography component="legend">3.4</Typography>
          <Rating
            style={{ padding: "0px 10px" }}
            readOnly
            precision={0.1}
            value={3.4}
          />
        </div>
        <Typography style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingInline: "20px" }} variant="body1">
          <p>Open till 9:00 PM</p>
          <Button variant="outlined" style={{color:"black", borderRadius:25, backgroundColor:'#fdb245'}}>Place Order</Button>
        </Typography>
        <Button
          style={{
            color: "black",
            borderStyle: "solid",
            borderBottomWidth: "2px",
          }}
        >
          <Typography variant="h6">MENU</Typography>
        </Button>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "10px 20px",
            }}
          >
            <Typography style={{ fontSize: "20px", display: "flex" }}>
              Dish 1
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handlePlus}
                style={{
                  display: "flex",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                <GrAdd
                  style={{
                    padding: "5px 0px",
                  }}
                />
              </Button>
              <Typography style={{ paddingInline: "5px", fontSize: "20px" }}>
                {quantity}
              </Typography>
              <Button
                onClick={handleMinus}
                style={{
                  display: "flex",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                <GrSubtract
                  style={{
                    padding: "5px 0px",
                  }}
                />
              </Button>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}
