import React from "react";
import { createWorker } from "tesseract.js";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useDataLayerValue } from "../StateManagement/DataLayer";

function ReadText() {
  const [{ blob, text }, dispatch] = useDataLayerValue();
  let Progress = {};

  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const imageURL = URL.createObjectURL(blob);

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(imageURL);
    dispatch({ type: "SETTEXT", payload: text });
  };

  return (
    <Grid item xs={12}>
      <Paper className="control">
        <Grid container>
          <Grid item className="croppedImage">
            <div>
              <img src={imageURL} alt="Cropped"></img>
            </div>
            <FormLabel>OCR Text</FormLabel>
            <FormLabel>
              {Progress.status}
              {Progress.progress}
            </FormLabel>
            <Button
              className="cropButton"
              variant="contained"
              color="secondary"
              onClick={doOCR}>
              Read Image
            </Button>
            <p>{text}</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ReadText;
