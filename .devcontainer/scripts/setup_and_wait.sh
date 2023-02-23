#!/bin/sh

set -e

USER=$(whoami)
for GROUP in $(groups); do
    GID_HOST=$(grep ^${GROUP}:x: /etc/hostgroup | cut -d : -f 3)
    GID_CONTAINER=$(grep ^${GROUP}:x: /etc/group | cut -d : -f 3)
    if [ -n "${GID_HOST}" ] && [ -n "${GID_CONTAINER}" ] && [ "${GID_HOST}" != "${GID_CONTAINER}" ]; then
        echo "Adding new group host ${GROUP}"
        echo "host${GROUP}:x:${GID_HOST}:${USER}" | sudo tee -a /etc/group >/dev/null
    fi
done

echo Container started!

while :
do
    sleep 1
done
