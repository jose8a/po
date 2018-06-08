#!/usr/bin/env node

/*

  po_edit_configuration () {
    FILE="$TM_PATH/$SESSION.yml"

    if [ -e $FILE ]
    then
      echo "----------------------------------------"
      vim $FILE
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
    .command('edit <config-file>')
    .alias('e')
    .description('edit tmuxinator config file for <project>')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Editing ...`);
    });
}
