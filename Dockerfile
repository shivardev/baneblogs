FROM node:18-bullseye

RUN apt-get update && apt-get install -y \
    curl \
    git \
    nano \
    openssh-server \
    sudo \
    wget \
    gnupg \
    software-properties-common \
    libglib2.0-0 \
    ca-certificates \
  && curl -fsSL https://code-server.dev/install.sh | sh \
  && rm -rf /var/lib/apt/lists/*

# Install Hugo Extended
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.148.1/hugo_extended_0.148.1_linux-amd64.deb \
  && dpkg -i hugo_extended_0.148.1_linux-amd64.deb \
  && rm hugo_extended_0.148.1_linux-amd64.deb

WORKDIR /workspace
RUN mkdir -p /workspace/baneblogs /var/run/sshd

COPY scripts/dev-entrypoint.sh /usr/local/bin/dev-entrypoint.sh
RUN chmod +x /usr/local/bin/dev-entrypoint.sh

WORKDIR /workspace/baneblogs

EXPOSE 22 1313 8443

ENV DEV_USER=dev
ENV DEV_PASSWORD=baneblogs
ENV PASSWORD=baneblogs
ENV ENABLE_CODE_SERVER=true

ENTRYPOINT ["dev-entrypoint.sh"]
CMD ["sleep", "infinity"]

# docker build -t hugo-dev .
