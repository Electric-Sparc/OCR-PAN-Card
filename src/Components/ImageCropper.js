import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropImage";
import "../Styles/styles.css";
import { useDataLayerValue } from "../StateManagement/DataLayer";

const ImageCropper = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [{ source }, dispatch] = useDataLayerValue();
  console.log(source);

  const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(source, croppedAreaPixels);
    dispatch({ type: "SETBLOB", payload: croppedImage });
    console.log(source);
  };

  return (
    <div className="cropper">
      <Cropper
        image={source}
        crop={crop}
        zoom={zoom}
        aspect={1.75}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  );
};

export default ImageCropper;
