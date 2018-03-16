import React, { Component } from 'react';
import { func } from 'prop-types';
import { isEmpty, first } from 'lodash';
import Dropzone from 'react-dropzone';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FileUpload from 'material-ui/svg-icons/file/file-upload';

const containerStyle = {
  width: '100%',
};

const paperStyle = {
  height: '10rem',
  width: '100%',
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const dropzoneStyle = {
  width: '100%',
};

const uploadButtonStyle = {
  margin: 'auto',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
};

export default class Upload extends Component {
  static propTypes = {
    uploadFile: func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onDrop = (files) => {
    this.setState({
      files,
    });
  }

  onUploadClick = () => this.props.uploadFile({ file: first(this.state.files) })

  render() {
    return (
      <div className="Upload" style={containerStyle}>
        <Paper style={paperStyle} zDepth={2} rounded={false}>
          <Dropzone
            multiple={false}
            style={dropzoneStyle}
            accept="image/jpeg, image/png"
            onDrop={this.onDrop}
          >
            <p>Drag and drop your file here, or click to select a file to upload.</p>
            <p>Only *.jpeg or *.png images will be accepted.</p>
          </Dropzone>
        </Paper>

        <RaisedButton
          label="Upload"
          style={uploadButtonStyle}
          icon={<FileUpload />}
          disabled={isEmpty(this.state.files)}
          onClick={this.onUploadClick}
        />
      </div>
    );
  }
}
