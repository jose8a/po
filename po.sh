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
  PROJECT=$2
}

po_open_list () {
  LIST=$2
}

po_list_all () {
  tmuxinator list
}

po_list_list () {
  cat $PO/projects/$2.list
}

po_stop_one () {
  cat $PO/projects/$2.list
}

po_stop_group () {
  cat $PO/projects/$2.list
}


case $1 in
  -h)
    po_show_help
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
    # else, run `po_list_list()`
    ;;
  -o)
    echo opening one ...
    # po_open_one()
    ;;
  -O)
    echo opening list ...
    # po_open_list()
    ;;
  -x)
    echo "terminate project $2"
    # po_stop_one()
    ;;
  -X)
    echo "terminate $2 ..."
    # po_stop_group()
    ;;
  -e)
      vim ~/.tmuxinator/$2.yml
    ;;
  *)
    echo "ERROR: Usage: "
    po_show_help
    ;;
esac
