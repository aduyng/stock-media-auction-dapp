import React, { Component } from 'react';
import { func, instanceOf } from 'prop-types';
import Dropzone from 'react-dropzone';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import { isEmpty, first } from 'lodash';

const paperStyle = {
  minHeight: '10rem',
  textAlign: 'center',
  display: 'block',
  position: 'relative',
};

const dropzoneStyle = {
  width: '100%',
};

const imageStyle = {
  width: '100%',
};

const removeButtonStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
};

export default class Uploader extends Component {
  static propTypes = {
    onChange: func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onDrop = files => this.setState({ file: first(files) }, () => this.props.onChange({ file: this.state.file }));
  onRemoveClick = () => this.setState({ file: undefined });

  renderRemoveButton() {
    return (
      <RaisedButton
        label="Remove"
        icon={<NavigationClose />}
        onClick={this.onCancelClick}
      />
    );
  }

  renderUploaderOrSelectedImage() {
    if (isEmpty(this.state.file)) {
      return (
        <Paper style={paperStyle} zDepth={1} rounded={false}>
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
      );
    }

    return (
      <Paper style={paperStyle} zDepth={1} rounded={false}>
        <IconButton
          style={removeButtonStyle}
          onClick={this.onRemoveClick}
        >
          <NavigationClose />
        </IconButton>
        <img src={this.state.file.preview} alt="Preview" style={imageStyle} />
      </Paper>
    );
  }

  render() {
    return (
      <div className="Uploader">
        {this.renderUploaderOrSelectedImage()}
      </div>
    );
  }
}
