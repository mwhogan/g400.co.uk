import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArticleIcon from '@mui/icons-material/Article';
import ChatIcon from '@mui/icons-material/Chat';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import DevicesIcon from '@mui/icons-material/Devices';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsightsIcon from '@mui/icons-material/Insights';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import ShieldIcon from '@mui/icons-material/Shield';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import Typography from '@mui/material/Typography';

export default function MainLinks() {
  const linkTypographyProps = { color: "primary", sx: { textDecoration: "underline" } }

  // State and handlers for opening of archive sections.
  const [zeusOpen, setZeusOpen] = React.useState(false);
  const handleZeusClick = () => {
    setZeusOpen(!zeusOpen);
  };
  const [fonleapOpen, setFonleapOpen] = React.useState(false);
  const handleFonleapClick = () => {
    setFonleapOpen(!fonleapOpen);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" component="h2">
        Active:
      </Typography>
      <List sx={{ pt: 0 }}>
        <ListItemButton component="a" href="https://github.com/mwhogan">
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub" primaryTypographyProps={linkTypographyProps} />
        </ListItemButton>
        <ListItemButton component="a" href="https://www.linkedin.com/in/mark-hogan-80a1741a">
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" primaryTypographyProps={linkTypographyProps} />
        </ListItemButton>
        <ListItemButton component="a" href="https://mastodon.ie/@g400">
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Mastodon" primaryTypographyProps={linkTypographyProps} />
        </ListItemButton>
      </List>
      <Typography variant="h6" component="h2">
        Archived:
      </Typography>
      <List sx={{ pt: 0 }}>
        <ListItemButton onClick={handleZeusClick}>
          <ListItemIcon>
            <ElectricBoltIcon sx={{ transform: 'scaleX(-1)' }} />
          </ListItemIcon>
          <ListItemText primary="Zeus Technology"
            secondary={
              <React.Fragment>
                At Riverbed, Brocade, Pulse Secure and Ivanti, Mark worked from 2014 to 2022 on a variety of products, platforms, libraries and programmes, primarily in the business unit formerly known as Zeus Technology.
              </React.Fragment>
            }
          />
          {zeusOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={zeusOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://web.archive.org/web/20201019221716/https://www.pulsesecure.net/products/services-director/">
              <ListItemIcon>
                <InsightsIcon />
              </ListItemIcon>
              <ListItemText primary="Services Director" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://web.archive.org/web/20220331072114/https://www.pulsesecure.net/products/virtual-traffic-manager/">
              <ListItemIcon>
                <CloudIcon />
              </ListItemIcon>
              <ListItemText primary="Virtual Traffic Manager" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://web.archive.org/web/20220425002741/https://www.pulsesecure.net/products/vwaf/">
              <ListItemIcon>
                <ShieldIcon />
              </ListItemIcon>
              <ListItemText primary="Virtual Web Application Firewall" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://web.archive.org/web/20220403172506/https://www.ivanti.com/products/ivanti-neurons-zero-trust-access">
              <ListItemIcon>
                <EnhancedEncryptionIcon />
              </ListItemIcon>
              <ListItemText primary="Neurons for Zero Trust Access" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://web.archive.org/web/20220608003654/https://www.ivanti.com/products/ivanti-neurons-for-secure-access">
              <ListItemIcon>
                <VpnLockIcon />
              </ListItemIcon>
              <ListItemText primary="Neurons for Secure Access" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleFonleapClick}>
          <ListItemIcon>
            <SmartphoneIcon />
          </ListItemIcon>
          <ListItemText primary="Fonleap"
            secondary={
              <React.Fragment>
                At Fonleap, Mark worked on the PocketVM and Storleap products from 2011 to 2014.
              </React.Fragment>
            }
          />
          {fonleapOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={fonleapOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://www.youtube.com/watch?v=IXlkCOsuHE8">
              <ListItemIcon>
                <DevicesIcon />
              </ListItemIcon>
              <ListItemText primary="PocketVM" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://web.archive.org/web/20141221212448/http://www.storleap.com/">
              <ListItemIcon>
                <CloudSyncIcon />
              </ListItemIcon>
              <ListItemText primary="Storleap" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }} component="a" href="https://web.archive.org/web/20130725110219/http://www.ideaspace.cam.ac.uk/members/people/Mark-Hogan?IArticle=2219">
              <ListItemIcon>
                <LightbulbIcon />
              </ListItemIcon>
              <ListItemText primary="ideaSpace" primaryTypographyProps={linkTypographyProps} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton component="a" href="https://web.archive.org/web/20220529112217/https://www.g400.co.uk/cantabits/">
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Cantabits" primaryTypographyProps={linkTypographyProps} />
        </ListItemButton>
        <ListItemButton component="a" href="https://g400.co.uk/cam/">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="University of Cambridge" primaryTypographyProps={linkTypographyProps} />
        </ListItemButton>
      </List>
    </React.Fragment>
  );
}
