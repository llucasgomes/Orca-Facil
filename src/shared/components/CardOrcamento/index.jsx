import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardOrcamento({ empresa }) {
  return (
    <Link to="/perfil" className="linkCard">
      <Card sx={{ width: 270, height: 270 }}>
        <CardActionArea sx={{ width: 270 }}>
          <CardMedia
            component="img"
            height="110"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />

          <CardContent
            sx={{
              height: 160,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {empresa}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                width: 270,
                textAlign: "right",
                paddingRight: 3,
              }}
            >
              Pedido:0045
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
