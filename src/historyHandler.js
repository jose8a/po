#!/usr/bin/env node

module.exports = function ( program ) {
  program
    .command('history [N]')
    .alias('y')
    .description('display the last [N] sessions launched (default 20)')
    // --- .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      // --- var mode = options.setup_mode || "normal";
      // --- env = env || 'all';
      // --- console.log('setup for %s env(s) with %s mode', env, mode);
      console.log(`History listing ...`);
    });
}
