import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Intro() {
  return (
    <React.Fragment>
      <Typography sx={{ mb: 3 }}>
        This website is the hub of Mark Hogan's online activities. With a degree in Computer Science from the University of Cambridge, he is now a passionate and dedicated software engineer with experience in designing and leading the development of secure, high-performance code for various forms of communication, filesystems, mobile applications, web services and more. Always seeking to grow, he is interested in designing innovative products and leading skilled teams.
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Below, you can find a list of links to his online activities. A number of the links provide methods of getting in contact with him.
      </Typography>
    </React.Fragment>
  );
}
