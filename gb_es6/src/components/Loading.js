import React, { Component, PropTypes } from 'react';

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: "100%",
    marginTop: '30px'
  }
};

class Loading extends Component {
  static propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
    repeater: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);
    this.originalText = props.text;
    this.state = {
      text: this.originalText
    };
  }

  static defaultProps = {
    text: "Loading",
    speed: 300,
    repeater: '.'
  };


  componentDidMount() {
    console.log(this);
    let stopper = `${this.originalText}${this.props.repeater.repeat(3)}`;
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + this.props.repeater
        });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
}


export default Loading;
