import React, { Component } from 'react';
import { func } from 'prop-types';
import { isEmpty, isNaN } from 'lodash';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Uploader from './Uploader';

const containerStyle = {
  padding: 20,
};

export default class Upload extends Component {
  static propTypes = {
    save: func.isRequired,
    goBack: func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onFileChange = ({ file }) => this.setState({ file })

  onSaveClick = () => {
    if (this.state.isValid) {
      return this.props.save({
        title: this.state.title,
        description: this.state.description,
        startingPrice: this.state.startingPrice,
        file: this.state.file,
      });
    }

    return false;
  }

  onTitleChange = (event, title) => {
    this.setState({
      title,
      titleError: isEmpty(title) ? 'The title is required' : undefined,
      isValid: this.isValid(),
    });
  }

  onDescriptionChange = (event, description) => {
    this.setState({
      description,
      descriptionError: isEmpty(description) ? 'The description is required' : undefined,
      isValid: this.isValid(),
    });
  }

  onStartingPriceChange = (event, newValue) => {
    const price = parseFloat(newValue);

    this.setState({
      startingPrice: price,
      startingPriceError: (isNaN(price) || price <= 0) ? 'The price is invalid' : undefined,
      isValid: this.isValid(),
    });
  }

  isValid = () => !isEmpty(this.state.title) &&
    !isEmpty(this.state.description) &&
    this.state.startingPrice > 0 &&
    !isEmpty(this.state.file)

  renderUploaderOrUploadedImage() {
    return (
      <Uploader onChange={this.onFileChange} />
    );
  }

  render() {
    return (
      <div className="Upload" style={containerStyle}>
        {this.renderUploaderOrUploadedImage()}

        <TextField
          hintText="Enter a catchy title for your photo"
          floatingLabelText="Title (*)"
          fullWidth
          onChange={this.onTitleChange}
          errorText={this.state.titleError}
        />

        <TextField
          hintText="Additional details about the photo"
          floatingLabelText="Description (*)"
          fullWidth
          multiLine
          rows={2}
          rowsMax={5}
          onChange={this.onDescriptionChange}
          errorText={this.state.descriptionError}
        />

        <TextField
          hintText="Enter the starting price for bidding"
          floatingLabelText="Starting Price (*)"
          fullWidth
          type="number"
          onChange={this.onStartingPriceChange}
          errorText={this.state.startingPriceError}
        />

        <div>
          <RaisedButton
            label="Save"
            primary
            icon={<ContentSave />}
            onClick={this.onSaveClick}
            disabled={!this.state.isValid}
          />

          <FlatButton
            style={{ marginLeft: 12 }}
            label="Cancel"
            icon={<NavigationClose />}
            onClick={this.props.goBack}
          />
        </div>
      </div>
    );
  }
}
