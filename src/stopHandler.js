#!/usr/bin/env node

/*

  po_stop_one () {
    echo "terminate project: $SESSION"
    # tmuxinator stop $SESSION
    tmux kill-session -t $SESSION
  }

  po_stop_group () {
    echo "terminate group: $GROUP ..."
    cat $PO_GROUPS/projects/$GROUP.list
  }

  po_stop_all () {
    echo "terminate server and all open sessions ..."

    # kill the tmux server and destroy all sessions
    tmux kill-server
  }

*/

module.exports = function ( program ) {
  program
    .command('stop <session>')
    .alias('x')
      // --- po.command('stop-one <session>', 'kill the running tmux session').alias('x')
      // --- po.command('stop-all', 'terminate all currently-running tmux sessions').alias('X')
    .description('shut down the tmux session, or all')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Stopping ...`);
    });
}
