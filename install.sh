#!/bin/bash

##############################################
# PREREQUISITES
##############################################
#
# * is there a ~/.tmuxinator folder?
#   -- this utility requires all 'mux' configs here
# * is the utility 'tmux' detected by this script?
# * is the utility 'tmuxinator' detected by this script?
#
##############################################
# FILESYSTEM EDITS
##############################################
#
# * install 'po' utility in folder $HOME/bin/po
#   -- if $HOME/bin doesn't exist, create it first
#   -- and then create the 'po' subfolder
# * copy the file 'po.sh' script into $HOME/bin/po
# * edit permissions of 'po.sh' via `chmod u+x`
#
##############################################
# CREATE alias for utility
##############################################
#
# * append the po.alias file to $HOME/.alias
#   -- if $HOME/.alias doesn't exist create it
#   -- if $HOME/.alias exists, check if 'po'
#       already exists as an alias (use grep to check)
#   -- finally, append to $HOME/.alias
#
# * link to $HOME/.alias in the BASHRC file by:
#   -- append `source ~/.alias` to BASHRC
#
# * source the ALIAS file to ensure the current shell can
#   immediately make use of 'po'
#
