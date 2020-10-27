#!/usr/bin/env bash

yum install -y epel-release 

yum install -y zip unzip passwd sudo which file wget jq 

yum install -y jq git 

yum install -y nodejs

npm install --production

git config --global user.email "nanbingjun@gmail.com"
git config --global user.name  "nanbingjun"

nohup sh -c 'node stub.js' & 


