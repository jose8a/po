#!/bin/bash

SESSION=$2
GROUP=$2


# TODO: remove this hard-coded $PO path and set it via the `install.sh` script
PO="/Users/jose8a/jdev/po-projects"

po_show_help() {
  cat HELP
}

po_option_error_banner () {
  echo
  echo "  ==================================="
  echo "  *                                 *"
  echo "  *    ERROR -- Invalid options.    *"
  echo "  ==================================="
  echo
}

po_attach_session() {
  echo "trying to attach to:  $SESSION"
  tmux attach -t $SESSION
}

po_detach_session() {
  tmux detach
}

po_show_running() {
  echo "These projects currently running: "
  echo
  tmux list-sessions |  cut -d : -f 1 | xargs -n 1 echo "  * "
  echo
}

po_open_one() {
  echo "opening session $SESSION ..."
  tmuxinator $SESSION
}

po_open_group () {
  FILE="$PO/$GROUP.list"

  echo "opening project-group ..."
  cat $FILE | xargs -n 1 tmuxinator
}

po_list_all () {
  tmuxinator list
}

po_list_list () {
  cat $PO/projects/$2.list
}

po_stop_one () {
  echo "terminate project: $2"
  cat $PO/projects/$2.list
}

po_stop_group () {
  echo "terminate group: $2 ..."
  cat $PO/projects/$2.list
}


case $1 in
  -h)
      po_show_help
      ;;
  -a)
      po_attach_session
      ;;
  -c)
      FILE='~/.tmuxinator/$2.yml'
      if [ -e $FILE ]
      then
        cat $FILE
      else
        echo "Configuration file does not exist."
        echo "Please provide a valid configuration."
        echo
      fi
      ;;
  -d)
      po_detach_session
      ;;
  -e)   # TODO
      vim ~/.tmuxinator/$2.yml
      ;;
  -r)
      po_show_running
      ;;
  -l)
      echo listing ...
      if [ $2 = 'all' ]
      then
        po_list_all
      else
        po_list_list
      fi
      ;;
  -L)   # TODO
      echo "TODO: this option not yet implemented. Check back later!"
      ;;
  -n)   # TODO
      echo "TODO: this option not yet implemented. Check back later!"
      ;;
  -o)
      po_open_one
      ;;
  -O)
      po_open_group
      ;;
  -x)   # TODO
      echo "TODO: this option not yet implemented. Check back later!"
      # po_stop_one()
      ;;
  -X)   # TODO
      echo "TODO: this option not yet implemented. Check back later!"
      # po_stop_group()
      ;;
  *)
      po_option_error_banner
      po_show_help
      ;;
esac
