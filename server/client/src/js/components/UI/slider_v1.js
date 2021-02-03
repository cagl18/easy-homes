import React, { Component } from 'react';

//To-do List:
//1 - improve aspect ratio of image inside slider

class Slider extends Component {
  state = { currentImageIndex: 0 };

  imagePreviewListRef = React.createRef();
  imagePreviewListContainer = React.createRef();

  findNewSliderArrayIndex = (images, index) => {
    //if the index is less or equal to array length
    if (index >= 0 && index < images.length) {
      // 0 to (images.length -1)
      return index;
    }
    // reset the index back to the front or back of the array
    return images.length - Math.abs(index);

    // const length = images.length - 1;
    // //passing the length of the array
    // if (Math.abs(index) > images.length) {
    //   const newIndex = index % length;

    //   if (index > 0) {
    //     console.log('inside Math.abs(index) > length first return statement');
    //     return newIndex;
    //   } else {
    //     console.log(
    //       '****inside Math.abs(index) > length last return statement******'
    //     );
    //     return length - Math.abs(newIndex);
    //   }
    // }
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
    //   'imagePreviewListRef',
    //   this.imagePreviewListRef,
    //   'imagePreviewListContainer',
    //   this.imagePreviewListContainer
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

            <img
              className={'slider__viewport--image'}
              src={
                this.props.data.images
                  ? this.props.data.images[this.state.currentImageIndex]
                  : ''
              }
            />

            {/* <img
              className={'slider__viewport--image'}
              style={{ left: '0' }}
              src={images[this.state.currentImageIndex]}
            />

            <img
              className={'slider__viewport--image'}
              style={{ left: '1000%' }}
              src={images[this.state.currentImageIndex]}
            /> */}

            <button
              className="slider--button right"
              onClick={() =>
                this.setNewSliderIndex(this.state.currentImageIndex + 1)
              }
            >
              <svg class="slider-button-icon" viewBox="0 0 100 100">
                <path
                  d="M 10,50 L 60,100 L 64,96 L 18,50  L 64,4 L 60,0 Z"
                  class="arrow"
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
              <i class="fas fa-angle-left"></i>
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
                          (this.state.currentImageIndex * 65 + 65) /
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
                    <div className="slider__preview--image--container">
                      <img
                        className={`slider__preview--image ${
                          this.state.currentImageIndex === index ? 'active' : ''
                        }`}
                        src={p}
                        onClick={() =>
                          this.setState({ currentImageIndex: index })
                        }
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
              <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
