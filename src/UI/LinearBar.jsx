import PropTypes from "prop-types"; // Import PropTypes

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ width }) => ({
  height: 8,
  borderRadius: 5,
  width: width,
}));

// Define prop types for the component
CustomizedProgressBars.propTypes = {
  value: PropTypes.number.isRequired, // Add the 'value' prop and specify it as required
  width: PropTypes.number.isRequired, // Add the 'value' prop and specify it as required
};

export default function CustomizedProgressBars(props) {
  return (
    <Box>
      <BorderLinearProgress
        variant="determinate"
        value={props.value}
        width={props.width}
      />
    </Box>
  );
}
