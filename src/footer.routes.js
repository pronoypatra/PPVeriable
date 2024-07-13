// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Pronoy Patra",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <CodeIcon />,
      link: "https://codeforces.com/profile/pronoyp",
    },
    {
      icon: <TwitterIcon />,
      link: "https://x.com/PronoyPatra",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/pronoypatra",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/pronoypatra/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/ipronoypatra/",
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Made with &hearts; by Pronoy Patra, {date}.
    </MKTypography>
  ),
};
