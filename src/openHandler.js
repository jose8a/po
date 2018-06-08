#!/usr/bin/env node

/*

  po_open_one() {
    echo "opening session $SESSION ..."
    tmuxinator $SESSION
  }

  po_open_group () {
    FILE="$PO_GROUPS/$GROUP.list"

    echo "opening project-group ..."
    cat $FILE | xargs -n 1 tmuxinator
  }

  po_open_restart_list ==> cat $RESTART_FILE | xargs -n 1 tmuxinator start

*/

module.exports = function ( program ) {
  program
    .command('open [entity]')
    .alias('o')
      // --- po.command('open-one <project>', 'launch a project from tmuxinator config').alias('o')
      // --- po.command('restart', 're-open sessions in the RESTART list').alias('S')
    .description('launch an entity (single-project or project-group)')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")

// --- TODO: redefine option: .option('-O, --open-group', 'tbd').alias('O')

    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Opening ...`);
    });
}
