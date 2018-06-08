#!/usr/bin/env node

/*

  po_create_session() {
    FILE="$TM_PATH/$SESSION.yml"
    TEMPLATE="$TM_PATH/templates/template.yml"

    if [ -e $FILE ]
    then
      echo "Session launcher already exists. Try editing instead."
    else
      cat $TEMPLATE > $FILE
      vim $FILE
    fi
  }

*/

module.exports = function ( program ) {
  program
    .command('create <config>')
    .alias('n')
    .description('create a new project launch configuration')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`Creating project launch config file ...`);
    });
}
