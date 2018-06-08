#!/usr/bin/env node

/*

  po_display_groups() {
    ls -al $PO_GROUPS
    echo
  }

  po_display_launchers() {
    echo
    echo "----------------------------------------"

    if [ $GROUP = 'all' ]
    then
      echo "listing all available launchers ..."
      po_list_all
    else
      echo "listing the launchers in group $GROUP ..."
      po_list_group
    fi

    echo
  }

  po_list_all () ==> tmuxinator list | xargs -n 1
  po_list_group () ==> cat $PO_GROUPS/$GROUP.list | xargs -n 1 echo "  * "

  po_show_running() {
    echo "These projects currently running: "
    echo
    tmux list-sessions | cut -d : -f 1 | xargs -n 1 echo "  * "
    echo
  }

  po_show_restart() {
    echo "The projects currently in the RESTART list: "
    echo
    cat $RESTART_FILE
    echo
  }

*/

module.exports = function ( program ) {
  program
    .command('list [name]')
    .alias('l')
    .description('display a list projects in group [name] - default all projects')
    .option('-g, --group [name]', 'Which named group to open')
    .option('-r, --running', 'Running sessions only')
    .option('-R, --actives', 'Latest actives-list')

// --- TODO: redefine option: .option('-L, --display-groups', 'tbd').alias('L')

    .action(function(env, options){
      if (options.group) {
        console.log(`TODO: group: ${options.group}`);
        return;
      }

      if (options.running) {
        console.log(`TODO: display running sessions`);
        return;
      }

      if (options.actives) {
        console.log(`TODO: display active projects`);
        return;
      }

      // If no options given, list all project-configurations in ~/.tmuxinator
      console.log(`TODO: Listing all project configurations...`);
    });
}
