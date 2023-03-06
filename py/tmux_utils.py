"""tbd: module description """

import os
import subprocess
import click


def log_blue(message):
    click.secho(message, fg='blue')


def log_cyan(message):
    click.secho(message, fg='cyan')


def log_magenta(message):
    click.secho(message, fg='magenta')


def log_yellow(message):
    click.secho(message, fg='yellow')


def log_green(message):
    click.secho(message, fg='green')


def print_process_output(process):
    """tbd."""
    while True:
        output = process.stdout.readline()
        log_cyan(f"\t{output.strip()}")
        # Do something else
        return_code = process.poll()

        if return_code is not None:
            log_yellow(f"RETURN CODE: {return_code}")
            log_yellow(f"ERROR: {process.stderr.readline()}")
            # Process has finished, read rest of the output
            for output in process.stdout.readlines():
                log_magenta(f"\t{output.strip()}")
            break


def exec_command_process(command):
    return subprocess.Popen(command,
                            stdout=subprocess.PIPE,
                            stderr=subprocess.PIPE,
                            universal_newlines=True)


# for the attach command only, use the os.system function call b/c
# the 'subprocess.Popen' function-call creates a weird artifact on
# stdin or stdout after it executes
def tx_attach(ctx, param, value):
    """Attach to tmux session."""
    if not value or ctx.resilient_parsing:
        return
    message = f"Attaching to tmux session: {value}"
    log_cyan(message)
    command = f"tmux attach -t {value}"
    os.system(command)
    log_cyan(f"\n")
    ctx.exit()


def tx_detach(ctx, param, value):
    """Detach from currently-attached tmux session."""
    if not value or ctx.resilient_parsing:
        return
    message = "Detach from current tmux session."
    log_cyan(message)
    command = ["tmux", "detach"]
    exec_command_process(command)
    log_cyan(f"\n")
    ctx.exit()


def tx_snapshot(ctx, param, value):
    """Save a snapshot/log of all active tmux sessions."""
    if not value or ctx.resilient_parsing:
        return
    message = "Save log/snapshot of active tmux sessions."
    log_cyan(message)

    cmd_basepath = "/Users/jose8a/jdev/tm-sessions"
    cmd_filepath = f"{cmd_basepath}/main.py"

    output_basepath = f"{cmd_basepath}/data"
    output_filepath = f"{output_basepath}/active-sessions-latest.log"

    command = ["python", cmd_filepath]
    # redirect the command output/stdout to the output file
    with open(output_filepath, 'w') as f:
        subprocess.Popen(command, stdout=f)
    log_cyan(f"\n")
    ctx.exit()


def tx_list_running(ctx, param, value):
    """Listing of all running tmux sessions."""
    if not value or ctx.resilient_parsing:
        return
    click.clear()
    description = "\n\nListing all running tmux sessions:"
    log_cyan(description)

    command = ["tmux", "ls"]
    sessions = exec_command_process(command)
    for line in sessions.stdout:
        sesh = line.strip().split(':')
        output = f"  * session: {sesh[0]}"
        log_yellow(output)
    log_cyan(f"\n")
    ctx.exit()


def tx_stop_session(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    description = "Stop a specific running session."
    log_cyan(description)

    command = ["tmux", "kill-session", "-t", f"{value}"]
    exec_command_process(command)
    ctx.exit()


def tx_stop_all(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    description = "Stop all running sessions."
    log_cyan(description)

    command = ["tmux", "kill-server"]
    exec_command_process(command)
    ctx.exit()


def tx_config_all(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    click.clear()
    description = "Show available tmux configs."
    log_cyan(description)

    tmuxp_config_path = "/Users/jose8a/.tmuxp/"
    command = ["ls", "-logh", tmuxp_config_path]
    process = exec_command_process(command)
    print_process_output(process)
    ctx.exit()


def tx_config_view(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    click.clear()
    description = "View an existing tmux config."
    log_cyan(description)

    tmuxp_config_file = f"/Users/jose8a/.tmuxp/{value}.yml"
    # TODO: make sure that tmuxp_config_file exists
    command = ["cat", tmuxp_config_file]
    process = exec_command_process(command)
    print_process_output(process)
    ctx.exit()


def tx_config_edit(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    click.clear()
    description = "Edit an existing tmux config."
    log_cyan(description)

    tmuxp_config_file = f"/Users/jose8a/.tmuxp/{value}.yml"
    # TODO: make sure that tmuxp_config_file exists before running
    #   the command
    command = f"vim {tmuxp_config_file}"
    os.system(command)
    ctx.exit()


def tx_config_new(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    click.clear()
    description = "Create a new tmux config."
    log_cyan(description)

    tmuxp_config_file = f"/Users/jose8a/.tmuxp/{value}.yml"
    command = f"vim {tmuxp_config_file}"
    os.system(command)
    ctx.exit()


def tx_rename_session(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    description = "Rename a running tmux session."
    log_cyan(description)

    new_session_name = value
    command = f"tmux rename-session {new_session_name}"
    os.system(command)
    ctx.exit()


def tx_rename_window(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    description = "Rename a running tmux session."
    log_cyan(description)

    new_window_name = value
    command = f"tmux rename-window {new_window_name}"
    os.system(command)
    ctx.exit()


def tx_rename_itab(ctx, param, value):
    """tbd."""
    if not value or ctx.resilient_parsing:
        return
    description = "Rename the current iterm tab."
    log_cyan(description)

    command = f"tabset --title {value}"
    os.system(command)
    ctx.exit()

