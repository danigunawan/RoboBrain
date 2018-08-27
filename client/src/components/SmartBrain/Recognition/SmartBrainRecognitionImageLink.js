import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./SmartBrainRecognitionImageLink.css";



class ImageForm extends React.PureComponent {
  render() {
    const { setImageURL,onSubmitButton} = this.props;
    return (
      <div className="container text-center" id="inputForm">
        <h5>Detect Faces In Picture</h5>
        <form className="form-inline row justify-content-center">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputURL"
              aria-describedby="emailHelp"
              placeholder="Image URL"
              onChange={setImageURL}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onSubmitButton}
          >
            Detect
          </button>
        </form>
      </div>
    );
  }
}

export default ImageForm;
