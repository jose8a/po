# po

## DESCRIPTION
  * NOTE: in this setup, the terms session and project are interchangeable

If you're like me, and you use `tmux sessions` as a de-facto IDE-lite for most if not all your development work and even your TODO lists, PO should help.  PO will enable more efficient control over starting projects, or groups of projects.  PO will enable more efficient control in stopping your projects as well.  In addition, if you tend to keep several projects open at the same time, PO will make it easy to launch "project-groups" as well as stop them when you context switch to another set of projects, or other work.

## REQUIREMENTS

### Operating System:
  * Mac OSX
  * Any flavor of Linux **should** work

### Pre-requisites:
You must have the following preinstalled on your system.

  * [libevent](http://libevent.org/)
  * [ncurses](http://invisible-island.net/ncurses/)
  * [tmux](https://tmux.github.io/)
  * [tmuxinator](https://github.com/tmuxinator/tmuxinator)

Additionally, the tmuxinator project configuration files are currently required to live in the $HOME/.tmuxinator/ folder.

## INSTALLATION

### Instructions:
First, ensure the above pre-requisites are installed on your machine. Then,

  `git clone URL_TO_THIS_GITHUB_REPO`

  `cd po && chmod u+x install.sh`

  `./install.sh`

### Quick test post-installation:
```
  po -l all
```

If you don't see a list of all the tmuxinator configuration sessions (minus the .yml extension) displayed as a result of that command, then something went wrong during the install.


## USAGE

### LIST of COMMANDS available:
* po -h
  - display help info on using `po` utility

* po -c SESSION
  - print to STDOUT the contents of "~/.tmuxinator/SESSION.yml" configuration file

* po -e SESSION
  - edit the "~/.tmuxinator/SESSION.yml" configuration file for SESSION

* po -L
  - display all *.list (project-groups) files

* po -l all
  - basically same as `tmuxinator list`

* po -l top
  - show contents of the top.list file

* po -n
  - create a new session-launcher from a template

* po -o SESSION
  - open a specific session named SESSION

* po -O top
  - open all projects in top.list file

* po -O GROUP
  - open all projects in $LIST.list file

* po -r
  - show all running projects (same as `tmux list-sessions`)

* po -R
  - show all projects in the RESTART list

* po -s
  - save running sessions (in RESTART list) for quick restart later

* po -S
  - re-open sessions in the RESTART list

* po -x SESSION
  - terminate a session named SESSION (basically `tmuxinator stop SESSION`)

* po -X
  - terminate ALL projects currently running through tmux

* po -z
  - create a scratch-session with random name



#===========================================================================
# WRAPPER functions over `tmux` utility functionality
#===========================================================================

# wrappter around tmux attach SESSION
po -a  SESSION

# wrapper around tmux detach
po -d





