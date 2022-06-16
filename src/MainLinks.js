import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function MainLinks() {
  return (
    <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
      Available on g400.co.uk:
      <ul>
        <li>
          <Link color="inherit" href="https://g400.co.uk/cantabits/">
            Cantabits (my blog)
          </Link>
        </li>
      </ul>
      Elsewhere on the Internet:
      <ul>
        <li>
          <Link color="inherit" href="https://github.com/mwhogan">
            GitHub
          </Link>
        </li>
        <li>
          <Link color="inherit" href="https://www.linkedin.com/in/mark-hogan-80a1741a">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link color="inherit" href="https://twitter.com/g400_pub">
            Twitter
          </Link>
        </li>
      </ul>
      Archive:
      <ul>
        <li>
          <Link color="inherit" href="https://web.archive.org/web/20130725110219/http://www.ideaspace.cam.ac.uk/members/people/Mark-Hogan?IArticle=2219">
            ideaSpace
          </Link>
        </li>
        <li>
          <Link color="inherit" href="https://www.g400.co.uk/cam/">
            University of Cambridge
          </Link>
        </li>
      </ul>
    </Typography>
  );
}
