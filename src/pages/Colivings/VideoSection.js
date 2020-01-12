import React from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { ColivingSection } from './ColivingStyle';

import './Styles.scss';

class SlideVideo extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    video: 0,
    videos: this.props.Video,
  };

  HandleClick = click => {
    const videoAtual = this.state.video;
    console.log(this.state.videos[this.state.video]);
    if (click === 'A') {
      if (videoAtual > 0) {
        this.setState({ video: videoAtual - 1 });
      } else if (videoAtual === 0) {
        this.setState({ video: this.state.videos.length - 1 });
      }
    } else if (videoAtual < this.state.videos.length - 1) {
      this.setState({ video: videoAtual + 1 });
    } else if (videoAtual === this.state.videos.length - 1) {
      this.setState({ video: 0 });
    }
  };

  HandleClickItem = key => {
    this.setState({ video: key });
  };

  render() {
    if (this.state.videos) {
      return (
        <ColivingSection>
          <h1 className="HeaderVideos">VÍDEOS</h1>

          <video
            width="300px"
            key={this.state.videos[this.state.video]}
            loop
            autoPlay
          >
            <source
              src={this.state.videos[this.state.video]}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="ContainerSetas">
            <button className="Botao" onClick={() => this.HandleClick('A')}>
              <FaAngleLeft size={24} />
            </button>
            <button className="Botao" onClick={() => this.HandleClick('B')}>
              <FaAngleRight size={24} />
            </button>
          </div>
        </ColivingSection>
      );
    }
    return <div style={{ width: '0' }} />;
  }
}

export { SlideVideo };
