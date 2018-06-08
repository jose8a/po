#!/usr/bin/env node

/*

  po_display_configuration () {
    FILE="$TM_PATH/$SESSION.yml"

    if [ -e $FILE ]
    then
      echo "----------------------------------------"
      cat $FILE
      echo "----------------------------------------"
      echo
    else
      echo "Configuration file does not exist."
      echo "Please provide a valid configuration."
      echo
    fi
  }

*/

module.exports = function ( program ) {
  program
    .command('content <config-file>')
    .alias('c')
    .description('display contents of a tmuxinator project config')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Showing config contents ...`);
    });
}
