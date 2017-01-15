#!/bin/bash

# -- $PO=""

po_show_help() {
  echo "HELP menu:"
}

po_show_running() {
  tmux --list-sessions
}
po_open_one() {
  PROJECT=$2
}

po_open_list () {
  LIST=$2
}

po_list_all () {
  tmux --list-sessions
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
    echo "PO Help Menu:"
    echo "__THE__HELP__MENU__"
    # po_show_help()
    ;;
  -r)
    echo "running projects ..."
    # po_show_running()
    ;;
  -l)
    echo listing ...
    # if $2=='all', run `list_all()`
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
esac
