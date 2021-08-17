import React from "react";
import { Formik, ErrorMessage, Form } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from 'yup';

const DropzoneValidation = () => {
    const formikOptions = {
        initialValues: { files: null },
        onSubmit: values => {
            console.log({
                files: values.files.map(file => ({
                    fileName: file.name,
                    type: file.type,
                    size: `${file.size} bytes`
                }))
            });
        },
        validationSchema: Yup.object({
            files: Yup.mixed().required('Requieres subir archivos')
        })
    }

    return (
        <div className="container">
            <Formik { ...formikOptions }>
                { ({ values, setFieldValue }) => (
                    <Form>
                        <label htmlFor="file">Multiple files upload</label>
                        <UploadComponent setFieldValue={ setFieldValue } />
                        { values.files &&
                            values.files.map((file, i) => (
                                <li key={ i }>
                                    { `File ${file.name} Type ${file.type} Size ${file.size} bytes` }
                                </li>
                            )) }
                        <ErrorMessage name="files" />
                        <button type="submit" className="btn btn-primary">
                            submit
                        </button>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}

const UploadComponent = ({ setFieldValue }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: acceptedFiles => {
            setFieldValue("files", acceptedFiles);
        }
    });
    return (
        <div>
            { }
            <div { ...getRootProps({ className: "dropzone" }) }>
                <input { ...getInputProps() } />
                { isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
                ) }
            </div>
        </div>
    );
};



export default DropzoneValidation
