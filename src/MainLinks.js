import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';

export default function MainLinks() {
  const linkTypographyProps = { color: "primary", sx: { textDecoration: "underline" } }
  return (
    <React.Fragment>
      <Typography>
        Available on g400.co.uk:
      </Typography>
      <List>
        <ListItemButton component="a" href="https://g400.co.uk/cantabits/">
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Cantabits (my blog)" primaryTypographyProps={linkTypographyProps} />
        </ListItemButton>
      </List>
      <Typography>
        Elsewhere on the Internet:
      </Typography>
      <List>
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
        <ListItemButton component="a" href="https://twitter.com/g400_pub">
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="Twitter" primaryTypographyProps={linkTypographyProps} />
        </ListItemButton>
      </List>
      <Typography>
        Archive:
      </Typography>
      <List>
        <ListItemButton component="a" href="https://web.archive.org/web/20130725110219/http://www.ideaspace.cam.ac.uk/members/people/Mark-Hogan?IArticle=2219">
          <ListItemIcon>
            <LightbulbIcon />
          </ListItemIcon>
          <ListItemText primary="ideaSpace" primaryTypographyProps={linkTypographyProps} />
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
