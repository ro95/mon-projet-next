import { Box, Button, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box textAlign="center" my={4}>
        <Typography variant="h3" color="primary">
          Bienvenue à Nos Événements
        </Typography>
        <Typography variant="h6">
          Découvrez nos prochains événements et réservez vos places !
        </Typography>
      </Box>

      {/* Slider Section */}
      <Box my={4}>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {/* Slide 1 */}
          <SwiperSlide>
            <Box textAlign="center">
              <Typography variant="h4">Événement 1 : Concert Jazz</Typography>
              <Typography variant="body1">Date : 10 Septembre 2024</Typography>
              <Button variant="contained" color="secondary" href="#">
                Réserver
              </Button>
            </Box>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <Box textAlign="center">
              <Typography variant="h4">
                Événement 2 : Conférence Tech
              </Typography>
              <Typography variant="body1">Date : 15 Septembre 2024</Typography>
              <Button variant="contained" color="secondary" href="#">
                Réserver
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
}
