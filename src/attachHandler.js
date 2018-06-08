#!/usr/bin/env node

/*
  po_attach_session() {
    echo "trying to attach to:  $SESSION"
    tmux attach -t $SESSION
  }
*/

module.exports = function ( program ) {
  program
    .command('attach <session>')
    .alias('a')
    .description('re-attach to a background tmux session')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Attaching ...`);
    });
}
