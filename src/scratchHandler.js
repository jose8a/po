#!/usr/bin/env node

const { spawn } = require('child_process');

/*

  po_create_scratch() ==> tmux new-session -s $RANDNAME

*/

module.exports = function ( program ) {
  program
    .command('scratch <session>')
    .alias('z')
    .description('create a temporary tmux session in current folder')
    .action(function(session, options){
      const sessionName = `zz-${session}`;
      console.log(`Creating a scratch tmux session ...`);
      console.log(sessionName);

      const createSession = spawn('cmd', [...options]);

      createSession.on('close', (exitCode) => {
      });
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
    });
}
