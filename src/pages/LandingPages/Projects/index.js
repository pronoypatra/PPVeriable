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
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// import Download from "pages/Presentation/sections/Download";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/welcomeImg.png";

function projects() {
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
              Projects{" "}
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
              MERN Stack
            </MKTypography>
          </MKBox>
          <MKTypography variant="body1" mt={6} mb={3}>
            Practice makes a man perfect.
            <br></br>Through multiple projects, I have diligently applied and practiced learned
            concepts. These experiences have not only familiarized me with various programming
            languages but also significantly enhanced my skills.
          </MKTypography>
          <MKBox textAlign="center">
            <MKTypography variant="h3" verticalAlign="bottom" mt={6} mb={3}>
              Machine Learning
            </MKTypography>
          </MKBox>
          <MKTypography variant="body1" mt={6} mb={3}>
            Coming soon &#128577;
          </MKTypography>
          {/* <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={0}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  title="Getting Started"
                  description="Check the possible ways of working with our product and the necessary files for building your own project."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                    label: "Let's start",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={0}>
                <FilledInfoCard
                  color="info"
                  icon="precision_manufacturing"
                  title="Plugins"
                  description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                    label: "Read more",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={0}>
                <FilledInfoCard
                  color="info"
                  icon="apps"
                  title="Components"
                  description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                    label: "Link",
                  }}
                />
              </Grid>
            </Grid>
          </Container> */}
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default projects;
