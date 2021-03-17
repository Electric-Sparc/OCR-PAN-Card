import React from "react";
import ImageCropper from "./ImageCropper";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";

function SelectRegion() {
  return (
    <Grid item xs={12}>
      <Paper className="control">
        <Grid container>
          <Grid item>
            <FormLabel>Select Region of Interest</FormLabel>
            <ImageCropper />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default SelectRegion;
