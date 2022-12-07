import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardOrcamento({ empresa }) {
  return (
    <Link to="/perfil" className="linkCard">
      <Card sx={{ maxWidth: 270, height: 270 }}>
        <CardActionArea sx={{ maxWidth: 270 }}>
          <CardMedia
            component="img"
            height="90"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {empresa}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pedido:0045
            </Typography>
          </CardContent>
        </CardActionArea>
        <Chip label="success" color="success" />
      </Card>
      <Chip label="primary" color="primary" />
    </Link>
  );
}
