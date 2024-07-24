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

// @mui material components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// Images
// import bgImage from "assets/images/shapes/waves-white.svg";

function Introduction() {
  return (
    <MKBox
      variant="gradient"
      bgColor="gray"
      position="relative"
      borderRadius="x1"
      shadow="sm"
      sx={{ overflow: "hidden" }}
    >
      <Container>
        <MKBox textAlign="center">
          <MKTypography variant="h3" verticalAlign="bottom" mt={6} mb={3}>
            About Me
          </MKTypography>
        </MKBox>
        <MKTypography variant="body1" mt={6} mb={3}>
          I am currently an undergraduate researcher at Machine Learning Lab. My research focuses on
          leveraging game theoretic principles to enhance fairness in federated learning
          environments. Additionally, I explore the application of multi-armed bandit algorithms to
          optimize decision-making processes particularly in federated settings. <br></br>Alongside
          my studies, I am vastly experienced in MERN stack development. I also regularly practice
          competitive programming problems as well.
        </MKTypography>
        <MKBox textAlign="center">
          <MKTypography variant="h3" verticalAlign="bottom" mt={6} mb={3}>
            Skills
          </MKTypography>
        </MKBox>
        <MKTypography variant="body1" mt={6} mb={3}>
          I am proficient in Python, C, C++ and have practical experience with technologies like
          PyTorch, TensorFlow, ReactJS, Express.js, AWS, MongoDB, Node.js, MATLAB.
          <br></br> Check out my projects and experiences for a testimony of my skills.
        </MKTypography>
      </Container>
    </MKBox>
  );
}

export default Introduction;
