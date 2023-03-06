""" tbd: module description """

import click


from tmux_utils import tx_attach, tx_detach, tx_snapshot, tx_list_running
from tmux_utils import tx_stop_session, tx_stop_all
from tmux_utils import tx_config_all, tx_config_new, tx_config_edit, tx_config_view
from tmux_utils import tx_rename_session, tx_rename_window, tx_rename_itab


@click.command()
@click.option('-a', is_flag=False, callback=tx_attach, expose_value=True,
              is_eager=True, help="Attach to tmux session.")
@click.option('-d', is_flag=True, callback=tx_detach, expose_value=False,
              is_eager=True, help="Detach from current tmux session.")
@click.option('-s', is_flag=True, callback=tx_snapshot, expose_value=False,
              is_eager=True, help="Save log/snapshot of active tmux sessions.")
@click.option('-r', is_flag=True, callback=tx_list_running, expose_value=False,
              is_eager=True, help="List all running tmux sessions")
@click.option('-x', is_flag=False, callback=tx_stop_session, expose_value=True,
              is_eager=True, help="Stop a specific running session.")
@click.option('-X', is_flag=True, callback=tx_stop_all, expose_value=False,
              is_eager=True, help="Stop all running sessions.")
@click.option('-c', is_flag=True, callback=tx_config_all, expose_value=False,
              is_eager=True, help="Show available tmux configs.")
@click.option('-C', is_flag=False, callback=tx_config_new, expose_value=True,
              is_eager=True, help="Create a new tmux config.")
@click.option('-e', is_flag=False, callback=tx_config_edit, expose_value=True,
              is_eager=True, help="Edit an existing tmux config.")
@click.option('-v', is_flag=False, callback=tx_config_view, expose_value=True,
              is_eager=True, help="View an existing tmux config.")
@click.option('--tx-resesh', is_flag=False, callback=tx_rename_session,
              expose_value=True, is_eager=True,
              help="Rename the currently-attached tmux session.")
@click.option('--tx-rewind', is_flag=False, callback=tx_rename_window,
              expose_value=True, is_eager=True,
              help="Rename the currently-attached tmux window.")
@click.option('--retab', is_flag=False, callback=tx_rename_itab, expose_value=True,
              is_eager=True, help="Rename the current iterm tab.")
def default():
    """No option chosen -- No actions taken."""
    click.echo('No option taken. No actions taken')
    click.echo('Please choose an option.')


if __name__ == '__main__':
    default()
