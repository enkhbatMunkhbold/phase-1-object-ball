const numPointsScored = name => findPlayer(name).points
const shoeSize = name => findPlayer(name).shoe
const teamColors = (teamName) => findTeam(teamName).colors
const playerStats = name => findPlayer(name)

const teamNames = () => {
  const game = gameObject()
  const teams = []
  for(const teamKey in game) {
    teams.push(game[teamKey].teamName)
  }
  return teams
}

const playerNumbers = team => {
  const lookingTeam = findTeam(team)
  const numbersOfPlayers = []
  for(const playerKey in lookingTeam.players) {
    numbersOfPlayers.push(lookingTeam.players[playerKey].number)
  }
  return numbersOfPlayers
}

const bigShoeRebounds = () => {
  let rebounds = 0
  let maxShoe = 0
  const game = gameObject()
  for(const teamKey in game) {
    console.log('Players:', game[teamKey].players)
    for(const playerKey in game[teamKey].players) {
      if(game[teamKey].players[playerKey].shoe > maxShoe) {
        maxShoe = game[teamKey].players[playerKey].shoe
        rebounds = game[teamKey].players[playerKey].rebounds
      }
    }
  }
  return rebounds
}

//********** HELPER FUNCTIONS ***********/

const findTeam = name => {
  const game = gameObject()
  for(const teamKey in game) {
    if(name === game[teamKey].teamName) {
      return game[teamKey]
    }
  }
}

const findPlayer = name => {
  const game = gameObject()
  for(const teamKey in game) {
    const players = game[teamKey].players
    for(const playerKey in players) {
      if(name === playerKey) {
        return players[playerKey]
      }
    }
  }
}

//************ BONUS *************/

const mostPointsScored = () => {
  const game = gameObject()
  let maxPoints = 0
  let mostPointMadePlayer = ''
  for(const teamKey in game) {
    for(const playerKey in game[teamKey].players) {
      if(game[teamKey].players[playerKey].points > maxPoints) {
        maxPoints = game[teamKey].players[playerKey].points
        mostPointMadePlayer = playerKey
      }
    }
  }
  return mostPointMadePlayer
}

const winningTeam = () => {
  const game = gameObject()
  const teams = [] 
  for(const teamKey in game) {
    let totalPoints = 0
    const teamPlayers = game[teamKey].players
    for(const playerKey in teamPlayers) {
      totalPoints += teamPlayers[playerKey].points 
    }
    teams.push({teamName: game[teamKey].teamName, teamPoints: totalPoints})
  }
  console.log(teams)
  return teams[0].teamPoints > teams[1].teamPoints ? teams[0].teamName : teams[1].teamName
}

const playerWithLongestName = () => {
  const game = gameObject()
  let maxNameLength = 0
  let longestName = ''
  let longestNamePlayer = {}
  for(const teamKey in game) {
    for(const playerKey in game[teamKey].players) {
      if(playerKey.length > maxNameLength) {
        maxNameLength = playerKey.length
        longestName = playerKey
        longestNamePlayer = game[teamKey].players[playerKey]
      }
    }
  }
  return {...longestNamePlayer, name: longestName}
}

//*********** SUPER BONUS ************/

const doesLongNameStealATon = () => {
  const game = gameObject()
  const longestNamePlayer = playerWithLongestName()
  for(const teamKey in game) {
    for(const playerKey in game[teamKey].players) {
      return game[teamKey].players[playerKey].steals < longestNamePlayer.steals
    }
  }
}