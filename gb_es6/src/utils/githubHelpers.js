import 'whatwg-fetch';

// const id    = "YOUR_CLIENT_ID";
// const sec   = "YOUR_SECRET_ID";
// const param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(data => data.json());
}

function getRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(data => data.json());
}

function getTotalStars(repos) {
  return repos.reduce((prev, current) => prev + current.stargazers_count, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(allStars => {
      return {followers: player.followers, totalStars: allStars};
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
}

const githubHelpers = {
  getPlayersInfo: function(players) {
    return Promise.all(players.map(username => {
      return getUserInfo(username);
    }))
    .catch(function(err) {
      console.warn("Error in getPlayersInfo: ", err);
    });
  },
  battle: function(players) {
    return Promise.all([getPlayersData(players[0]), getPlayersData(players[1])])
      .then(players => calculateScores(players))
      .catch(err => console.warn(err));
  }
}

export default githubHelpers;
