import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Intro() {
  return (
    <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
      {'This website is the hub of Mark Hogan\'s online activities. With a degree in Computer Science from the '}
      <Link color="inherit" href="https://www.cam.ac.uk/">
        University of Cambridge
      </Link>
      {', he is now a passionate and dedicated software engineer with experience in designing and leading the development of high-performance code for various forms of communication, filesystems, mobile applications, web services and more. Always seeking to grow, he is interested in designing innovative products and leading skilled teams. A number of the links below to related items provide methods of getting in contact with him.'}
    </Typography>
  );
}
