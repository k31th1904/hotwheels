#!/bin/bash

apt-get update
apt-get install -y vim
apt-get install -y iproute2
apt-get install -y iputils-ping

echo log: $(pwd)

pip install -r requirements.txt

