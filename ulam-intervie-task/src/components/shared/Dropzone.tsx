import './Dropzone.scss';

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
// import { parse } from "papaparse";

interface DropzoneProps {
  onDrop: (files: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
    const [dropzoneDisabled, setDropzoneDisabled] = useState<boolean>(false);

    const handleOnDropzoneAccepted = async (files: File[]) => {
        // const texts = await files[0].text();
        // console.log(parse(texts, { header: false }));
        setDropzoneDisabled(true);
        props.onDrop(files);
        setDropzoneDisabled(false);
    }

    const {getRootProps, getInputProps} = useDropzone({
        accept: '.csv',
        disabled: dropzoneDisabled,
        onDropAccepted: handleOnDropzoneAccepted
    });
  return <div className="dropzone" {...getRootProps()}><input {...getInputProps()}/></div>;
};

export default Dropzone;
