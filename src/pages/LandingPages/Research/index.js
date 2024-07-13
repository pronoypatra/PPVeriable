// Material Kit 2 React components
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// import Download from "pages/Presentation/sections/Download";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/welcomeImg.png";

function presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
        transparent
        // sticky
        light
        right
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          borderRadius: "2g",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-5}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Pronoy Patra{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Undergraduate researcher - Machine Learning Lab
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <MKBox textAlign="center">
            <MKTypography variant="h3" verticalAlign="bottom" mt={6} mb={3}>
              Research
            </MKTypography>
            <MKTypography variant="h5" verticalAlign="bottom" mt={3} mb={1}>
              Federated Learning, Game Theory, Fairness
            </MKTypography>
          </MKBox>
          <MKTypography variant="body1" mt={6} mb={3}>
            My current focus includes developing novel incentive mechanisms to promote truthfulness
            within federated settings.
            <br></br>Additionally, I am addressing the client selection problem to enhance
            convergence rates in federated learning environments. By leveraging principles from game
            theory, I aim to optimize collaborative learning processes while ensuring fairness and
            efficiency.
          </MKTypography>
          <MKBox textAlign="center">
            <MKTypography variant="h3" verticalAlign="bottom" mt={6} mb={3}>
              Publications
            </MKTypography>
          </MKBox>
          <MKTypography variant="body1" mt={6} mb={3}>
            Coming soon &#128577;
          </MKTypography>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default presentation;
