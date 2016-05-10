var React    = require('react'),
    ReactDOM = require('react-dom');

var USER_DATA = {
  name:     "Ezra Raez",
  username: "EARnagram",
  image:    "https://avatars1.githubusercontent.com/u/12765592?v=3&s=460"
}

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})


ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
