#!/bin/bash

set -ex

VERSION="${VERSION:-latest}"

# --f == "fresh install"
if [ "$1" != "--f" ]; then
    docker stop be
    docker rm be
    docker stop fe
    docker rm fe
fi

docker build -t database ./database/
docker build -t be ./backend/ 
docker build -t fe ./frontend/ 

docker-compose down -v && docker-compose up 