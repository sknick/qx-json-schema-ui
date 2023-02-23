FROM ubuntu:20.04

ARG HOST_UID=1000

WORKDIR /
RUN apt --assume-yes update
RUN apt --assume-yes install curl git git-lfs sudo

WORKDIR /tmp
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN apt update && apt install -y nodejs

RUN groupadd --gid $HOST_UID developer
RUN useradd --uid $HOST_UID --gid $HOST_UID -s /bin/bash -m developer
RUN mkdir -p /etc/sudoers.d
RUN echo developer ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/developer
RUN chmod 0440 /etc/sudoers.d/developer

COPY .devcontainer/scripts/setup_and_wait.sh /bin/setup_and_wait.sh

USER developer

# Create directories that can't seem to be created or are created as root for
# some reason
RUN mkdir -p /home/developer/.vscode-server
RUN mkdir -p /home/developer/.vscode-server/extensions
RUN mkdir -p /home/developer/github.com/sknick

ENTRYPOINT /bin/setup_and_wait.sh
