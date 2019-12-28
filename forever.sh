#!/bin/bash
pushd /project
npm install strapi@beta -g
popd
pushd /project/beta-project
strapi install documentation
strapi develop
popd

for (( ; ; )) 
	do echo "" > /dev/null
done
