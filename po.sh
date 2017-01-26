#!/bin/bash

# TODO: remove this hard-coded $PO path and set it via the `install.sh` script
PO="~/jdev/po-projects/"

po_show_help() {
  cat HELP
}

po_show_running() {
  echo "These projects currently running: "
  echo
  tmux list-sessions |  cut -d : -f 1 | xargs -n 1 echo "  * "
  echo
}

po_open_one() {
  echo opening one ...
  PROJECT=$2
}

po_open_list () {
  echo opening list ...
  LIST=$2
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
    echo "TODO: this option not yet implemented. Check back later!"
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
    echo "TODO: this option not yet implemented. Check back later!"
    ;;
  -e)
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
  -L)
    echo "TODO: this option not yet implemented. Check back later!"
    ;;
  -n)
    echo "TODO: this option not yet implemented. Check back later!"
    ;;
  -o)
    echo "TODO: this option not yet implemented. Check back later!"
    # po_open_one()
    ;;
  -O)
    echo "TODO: this option not yet implemented. Check back later!"
    # po_open_list()
    ;;
  -x)
    echo "TODO: this option not yet implemented. Check back later!"
    # po_stop_one()
    ;;
  -X)
    echo "TODO: this option not yet implemented. Check back later!"
    # po_stop_group()
    ;;
  *)
    echo "ERROR: Usage: "
    po_show_help
    ;;
esac
