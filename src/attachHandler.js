const sh = require('shelljs');
const chalk = require('chalk');

/*
  po_attach_session() {
    echo "trying to attach to:  $SESSION"
    tmux attach -t $SESSION
  }
*/

const { exec, spawn } = require('child_process');

function onAttach(session, cmd) {
  sh.exec(`tmux attach-session -t ${session}`);
  // ----- const tmSession = exec(`tmux attach-session -t ${session}`, (err, stdout, stderr) => {
  // -----   if (err) {
  // -----     console.error(`exec error: ${err}`);
  // -----     return;
  // -----   }

  // -----   console.log(`Number of files ${stdout}`);
  // ----- });

  // --- tmSession.on('error', (err) => {
  // ---   console.log('Failed to start subprocess.');
  // --- });
}

module.exports = function ( program ) {
  program
    .command('attach <session>')
    .alias('a')
    .description('re-attach to a background tmux session')
    .action(onAttach);
}
