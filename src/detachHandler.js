#!/usr/bin/env node

/*

  po_detach_session() {
    tmux detach
  }

*/

module.exports = function ( program ) {
  program
    .command('detach')
    .alias('d')
    .description('detach from tmux session')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Detaching ...`);
    });
}
