#!/bin/bash

# This script is used to setup the environment, build and launch the application
. ~/.nvm/nvm.sh >/dev/null 2>&1
. ~/.profile >/dev/null 2>&1
. ~/.bashrc >/dev/null 2>&1
. ~/.zshrc >/dev/null 2>&1
#---------------------------------------

# Defaults
APP_NAME=${APP_NAME:-app}
APP_PORT=${APP_PORT:-3000}

#---------------------------------------

source=$1
watch=$2
newline=$'\n'
normal=$(tput sgr0)
green=`tput setaf 2`
red=`tput setaf 1`
lime=`tput setaf 40`
reset_color=`tput sgr0`
done='✔️'
fail='❌'


function print_action {
    echo -n $1
    sleep 1
}

function print_failure {
    echo -ne "\r$var\033[K${red}${fail} ${normal}$1${reset_color}"
    echo ${newline}
}

function print_success {
    echo -ne "\r$var\033[K${lime}${done}${reset_color} ${normal}${green}$1${reset_color}"
    echo ${newline}
}

function print_text {
    echo -e "\n$1${normal}"
}


# Initialize
print_text "### Setting up Frontend 🏗️"

# if type nvm &> /dev/null;
# then
#   print_action "Setting node version..."
#   nvm use >/dev/null 2>&1 || { exit 1; }
#   nodeversion=$(node -v)
#   print_success "Using Node $nodeversion"
# else
#   print_failure "Failed to set node version. Do you have NVM installed.";
# fi

# # Install dependencies using Yarn
# print_action "Installing dependencies..."
# type yarn >/dev/null 2>&1 || { print_failure "Yarn is not installed. Please install it first."; exit 1; }
# yarn install --silent || { exit 1; }
# print_success "Dependencies installed"

type node >/dev/null 2>&1 ||  { print_failure "Node is not installed and therefore the server will not start."; exit 1; } 
if [node server.js &> /dev/null]; then
  print_success "Server is running"
  echo "NODE_ENV=${NODE_ENV}"
else
  print_failure "Server is not running"
  print_text "Node on WSL can be challenging
Please check node setup on your server."
fi


