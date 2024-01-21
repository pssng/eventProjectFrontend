import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const StaticRating = ({ value }) => (
  <Box
    sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Rating
      name="hover-feedback"
      value={value}
      precision={0.5}
      getLabelText={getLabelText}
      readOnly
      icon={<StarIcon style={{ color: '#ffc107' }} fontSize="inherit" />}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    )}
  </Box>
);

export default StaticRating;
