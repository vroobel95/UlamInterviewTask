import "./Dropzone.scss";

import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
import { DropzoneArea } from "material-ui-dropzone";
// import { parse } from "papaparse";

interface DropzoneProps {
  onDrop: (files: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const [dropzoneDisabled, setDropzoneDisabled] = useState<boolean>(false);

  const handleOnDropzoneAccepted = async (files: File[]) => {
    setDropzoneDisabled(true);
    props.onDrop(files);
    setDropzoneDisabled(false);
  };

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: ".csv",
  //   disabled: dropzoneDisabled,
  //   onDropAccepted: handleOnDropzoneAccepted,
  // });

  return (
    <div className="dropzone-wrapper">
      <DropzoneArea
        showFileNames={true}
        showPreviewsInDropzone={false}
        acceptedFiles={[".csv"]}
        dropzoneText={"Drag and drop an CSV here or click"}
        onDrop={handleOnDropzoneAccepted}
      />
    </div>
  );
};

export default Dropzone;
