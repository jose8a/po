#!/usr/bin/env node

/*

  po_save_running_sessions ==> tmux list-sessions | cut -d : -f 1 > $RESTART_FILE

*/

module.exports = function ( program ) {
  program
    .command('snapshot')
    .alias('s')
    .description('record the names of all running sessions')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Recording snapshot of running sessions ...`);
    });
}
