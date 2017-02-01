#!/bin/bash

# ===========================================================================
# FUNCTIONS
# ===========================================================================
po_show_help() {
  cat $HELP
}

po_option_error_banner () {
  echo
  echo "  ==================================="
  echo "  *                                 *"
  echo "  *    ERROR -- Invalid options.    *"
  echo "  ==================================="
  echo
}

po_create_scratch() {
  RANDNAME="scratch-$RANDOM"
  tmux new-session -s $RANDNAME
}

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

po_attach_session() {
  echo "trying to attach to:  $SESSION"
  tmux attach -t $SESSION
}

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

po_detach_session() {
  tmux detach
}

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

po_show_running() {
  echo "These projects currently running: "
  echo
  tmux list-sessions | cut -d : -f 1 | xargs -n 1 echo "  * "
  echo
}

po_open_one() {
  echo "opening session $SESSION ..."
  tmuxinator $SESSION
}

po_open_group () {
  FILE="$PO_GROUPS/$GROUP.list"

  echo "opening project-group ..."
  cat $FILE | xargs -n 1 tmuxinator
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

po_list_all () {
  tmuxinator list | xargs -n 1
}

po_list_group () {
  cat $PO_GROUPS/$GROUP.list | xargs -n 1 echo "  * "
}

po_save_running_sessions () {
  tmux list-sessions | cut -d : -f 1 > $RESTART_FILE
}

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

