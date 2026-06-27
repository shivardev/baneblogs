FROM node:18-bullseye

RUN apt-get update && apt-get install -y \
    curl \
    git \
    nano \
    wget \
    gnupg \
    software-properties-common \
    libglib2.0-0 \
    ca-certificates \
  && curl -fsSL https://code-server.dev/install.sh | sh

# Install Hugo Extended
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.148.1/hugo_extended_0.148.1_linux-amd64.deb \
  && dpkg -i hugo_extended_0.148.1_linux-amd64.deb \
  && rm hugo_extended_0.148.1_linux-amd64.deb

WORKDIR /workspace
RUN git clone https://github.com/shivardev/baneblogs.git
WORKDIR /workspace/baneblogs
RUN npm install

EXPOSE 1313 8443

ENV PASSWORD=baneblogs
CMD ["code-server", "--bind-addr", "0.0.0.0:8443", "--auth", "password"]

# docker build -t hugo-dev .
