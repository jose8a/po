const sh = require('shelljs');
const chalk = require('chalk');

/*
  po_open_group () {
    FILE="$PO_GROUPS/$GROUP.list"

    echo "opening project-group ..."
    cat $FILE | xargs -n 1 tmuxinator
  }

  po_open_restart_list ==> cat $RESTART_FILE | xargs -n 1 tmuxinator start
*/

const { fork, exec, execFile, spawn } = require('child_process');
const fs = require('fs');

function onOpen(env, options) {
  if (options.project) {
    console.log(`project: ${options.project}`);
    // check if tmuxinator config exists
    if (fs.existsSync(`~/.tmuxinator/${options.project}.yml`)) {
      console.log(chalk.red(`The tmuxinator configuration does not exist.`));
      console.log();
      return;
    }

    const session = spawn('sh', [`tmuxinator`, `start`, `${options.project}`], {
      detached: true,
      stdio: 'ignore'
    });

    session.unref();

    session.on('error', (err) => {
      console.log('Failed to start subprocess.');
    });

    return;
  }

  if (options.project_group) {
    console.log(`project-group: ${options.project_group}`);
    console.warn(`TODO: this option not yet implemented.`);
    return;
  }

  if (options.restart_group) {
    console.log(`isRestart?: ${options.restart_group}`);
    return;
  }

  console.log(`Error - wrong options ...${env}`);
}

module.exports = function ( program ) {
  program
    .command('open [entity]')
    .alias('o')
    .description('launch an entity (single-project or project-group)')
    .option("-p, --project <project_name>", "open/launch a signle project")
    .option("-g, --project_group <group_name>", "open a group of projects")
    .option("-r, --restart_group", "open the RESTART group, if it exists")
    .action(onOpen);
}
