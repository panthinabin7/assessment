import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 5,
  width: 60,
}));

export default function CustomizedProgressBars(props) {
  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={props.value} />
    </Box>
  );
}
