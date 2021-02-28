import React, { Component } from 'react';

//To-do List:
//1 - improve aspect ratio of image inside slider

class Slider extends Component {
  state = { currentImageIndex: 0 };

  imagePreviewListRef = React.createRef();
  imageListRef = React.createRef();

  findNewSliderArrayIndex = (images, index) => {
    //if the index is less or equal to array length
    if (index >= 0 && index < images.length) {
      // 0 to (images.length -1)
      return index;
    }
    // reset the index back to the front or back of the array
    return images.length - Math.abs(index);
  };

  setNewSliderIndex = (index) => {
    const newIndex = this.findNewSliderArrayIndex(
      this.props.data.images,
      index
    );
    this.setState({ currentImageIndex: newIndex });
  };

  render() {
    // console.log(
    //   'this.imageListRef.current?.parentElement?.offsetWidth',
    //   this.imageListRef.current?.parentElement?.offsetWidth
    // );
    if (!this.props.data.images) return <div></div>;
    return (
      <div className="slider" style={{ color: 'black' }}>
        <div className="slider__container">
          <div className="banner__container">
            {this.props.data.comingsoon ? (
              <div className="banner banner-message">
                {this.props.data.comingsoon}
              </div>
            ) : (
              ''
            )}
            {this.props.data.openhouse ? (
              <div className="banner open-house">
                {this.props.data.openhouse}
              </div>
            ) : (
              ''
            )}
            {this.props.data.status !== 'Active' ? (
              <div className="banner status">{this.props.data.status}</div>
            ) : (
              ''
            )}
          </div>

          <div className="slider__viewport">
            <button
              className="slider--button left"
              onClick={() =>
                this.setNewSliderIndex(this.state.currentImageIndex - 1)
              }
            >
              <svg className="slider-button-icon" viewBox="0 0 100 100">
                <path
                  d="M 10,50 L 60,100 L 64,96 L 18,50  L 64,4 L 60,0 Z"
                  className="arrow"
                ></path>
              </svg>
            </button>

            <div className="slider__viewport--images-container">
              <div
                ref={this.imageListRef}
                className="slider__viewport--images-list"
                style={{
                  left: `-${
                    this.state.currentImageIndex *
                    this.imageListRef.current?.parentElement?.offsetWidth
                  }px`,
                  transition: `${
                    this.props.data?.images?.length -
                      (this.state.currentImageIndex + 1) ===
                      0 || this.state.currentImageIndex <= 0
                      ? 'all 0.2s ease 0s'
                      : 'all 0.6s ease 0s'
                  }`,
                }}
              >
                {this.props.data.images.map((img, index) => (
                  <div
                    key={index}
                    className="slider__viewport--image--container"
                    style={{
                      left: `${
                        index *
                          -this.imageListRef.current?.parentElement
                            ?.offsetWidth +
                        'px'
                      }`,
                      width: `${
                        this.imageListRef.current?.parentElement?.offsetWidth +
                        'px'
                      }`,
                    }}
                  >
                    <img
                      className="slider__viewport--image"
                      src={img ? img : ''}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              className="slider--button right"
              onClick={() =>
                this.setNewSliderIndex(this.state.currentImageIndex + 1)
              }
            >
              <svg className="slider-button-icon" viewBox="0 0 100 100">
                <path
                  d="M 10,50 L 60,100 L 64,96 L 18,50  L 64,4 L 60,0 Z"
                  className="arrow"
                ></path>
              </svg>
            </button>
          </div>
          <div className="slider__preview">
            <button
              className="slider__preview--button"
              onClick={() =>
                this.setNewSliderIndex(this.state.currentImageIndex - 1)
              }
            >
              <i className="fas fa-angle-left"></i>
            </button>

            <div
              ref={this.imagePreviewListContainer}
              className="slider__preview--container"
            >
              <div
                ref={this.imagePreviewListRef}
                className={`slider__preview--image-list `}
                style={{
                  transform: `${
                    this.imagePreviewListRef.current?.parentElement
                      ?.offsetWidth &&
                    Math.floor(
                      (this.state.currentImageIndex * 65 + 65) /
                        this.imagePreviewListRef.current?.parentElement
                          ?.offsetWidth
                    ) <=
                      Math.floor(
                        this.imagePreviewListRef.current?.scrollWidth /
                          this.imagePreviewListRef.current?.parentElement
                            ?.offsetWidth
                      )
                      ? `translateX(-${Math.floor(
                          (this.state.currentImageIndex * 65) /
                            this.imagePreviewListRef.current?.parentElement
                              ?.offsetWidth
                        )}00%)`
                      : 'translateX(0%)'
                  }`,
                }}
              >
                {/* <div
                ref={this.imagePreviewListRef}
                className={`slider__preview--image-list ${
                  this.imagePreviewListRef.current?.offsetWidth &&
                  this.state.currentImageIndex >
                    this.imagePreviewListRef.current?.offsetWidth / 65 - 1
                    ? 'end'
                    : 'start'
                }`}
              > */}
                {this.props.data?.images.map((p, index) => {
                  return (
                    <div
                      key={index}
                      className="slider__preview--image--container"
                    >
                      <img
                        className={`slider__preview--image ${
                          this.state.currentImageIndex === index ? 'active' : ''
                        }`}
                        src={p}
                        onClick={() =>
                          this.setState({ currentImageIndex: index })
                        }
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className="slider__preview--button"
              onClick={() =>
                this.setNewSliderIndex(this.state.currentImageIndex + 1)
              }
            >
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
