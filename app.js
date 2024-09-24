function loggedAndSubbed (log, sub) {
return log === 'LOGGED_IN' || sub === 'SUBSCRIBED'
}

console.log(loggedAndSubbed('LOGGED_IN', 'SUBSCRIBED'))