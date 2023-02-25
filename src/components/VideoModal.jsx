import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {

    const { videoId } = this.props;
    const isVideoDisabled = !videoId;

    return (
      <div style={{display: "inline-block"}}>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={ videoId }
            onClose={() => this.setState({ isOpen: false })}
          />
          <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg" 
                  disabled={isVideoDisabled}
                  style={isVideoDisabled ? { opacity: 0.5 } : {}}
                  onClick={this.openModal}>
            Video
          </button>
        </div>
      </div>
    );
  }

};

export default VideoModal;