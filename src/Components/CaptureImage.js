import React from "react";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import { useDataLayerValue } from "../StateManagement/DataLayer";

const CaptureImage = () => {
  const [{ source }, dispatch] = useDataLayerValue();

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        dispatch({ type: "SETSOURCE", payload: newUrl });
      }
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <input
          accept="image/*"
          className="input"
          id="icon-button-file"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span">
            <PhotoCameraRoundedIcon fontSize="large" color="primary" />
          </IconButton>
        </label>
        <div>
          <img src={source} alt="Captured Image"></img>
        </div>
      </Grid>
    </Grid>
  );
};

export default CaptureImage;
