import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardOrcamento() {
  return (
    <Link to="/perfil" className="linkCard">
      <Card sx={{ maxWidth: 170 }}>
        <CardActionArea sx={{ maxWidth: 170 }}>
          <CardMedia
            component="img"
            height="90"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Totalplasts asdasd asdas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pedido:0045
              <Chip
                label="primary"
                size="small"
                color="primary"
                variant="outlined"
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
