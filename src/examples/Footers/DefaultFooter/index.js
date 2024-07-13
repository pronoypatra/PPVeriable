/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials, copyright } = content;

  return (
    <MKBox component="footer" alignItems="center">
      <Container>
        <MKBox alignItems="center">
          <Grid container spacing={3}>
            <Grid item xs={12} md={7} sx={{ ml: "auto", mb: 3 }}>
              <MKBox alignItems="center">
                <Link to={brand.route}>
                  <MKBox
                    component="img"
                    src={brand.image}
                    alt={brand.name}
                    maxWidth="2rem"
                    mb={2}
                  ></MKBox>
                </Link>
                <MKTypography variant="h6">{brand.name}</MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" mt={3}>
                {socials.map(({ icon, link }, key) => (
                  <MKTypography
                    key={link}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === socials.length - 1 ? 0 : 2.5}
                  >
                    {icon}
                  </MKTypography>
                ))}
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
        <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
          {copyright}
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
