#!/usr/bin/env bash
set -euo pipefail

DEV_USER="${DEV_USER:-dev}"
DEV_PASSWORD="${DEV_PASSWORD:-}"
WORKSPACE_DIR="${WORKSPACE_DIR:-/workspace/baneblogs}"
GIT_USER_NAME="${GIT_USER_NAME:-}"
GIT_USER_EMAIL="${GIT_USER_EMAIL:-}"

if ! id "${DEV_USER}" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "${DEV_USER}"
  usermod --append --groups sudo "${DEV_USER}"
fi

if [ -n "${DEV_PASSWORD}" ]; then
  echo "${DEV_USER}:${DEV_PASSWORD}" | chpasswd
fi

mkdir -p "/home/${DEV_USER}/.ssh" /var/run/sshd "${WORKSPACE_DIR}"
chmod 700 "/home/${DEV_USER}/.ssh"

if [ -n "${SSH_PUBLIC_KEY:-}" ]; then
  echo "${SSH_PUBLIC_KEY}" > "/home/${DEV_USER}/.ssh/authorized_keys"
  chmod 600 "/home/${DEV_USER}/.ssh/authorized_keys"
fi

chown -R "${DEV_USER}:${DEV_USER}" "/home/${DEV_USER}"
chown "${DEV_USER}:${DEV_USER}" "${WORKSPACE_DIR}" 2>/dev/null || true

if [ -n "${GIT_USER_NAME}" ]; then
  sudo --user "${DEV_USER}" git config --global user.name "${GIT_USER_NAME}"
fi

if [ -n "${GIT_USER_EMAIL}" ]; then
  sudo --user "${DEV_USER}" git config --global user.email "${GIT_USER_EMAIL}"
fi

if ! grep -q "^PasswordAuthentication yes" /etc/ssh/sshd_config; then
  echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config
fi

/usr/sbin/sshd

if [ "${ENABLE_CODE_SERVER:-true}" = "true" ]; then
  sudo --user "${DEV_USER}" --preserve-env=PASSWORD \
    code-server "${WORKSPACE_DIR}" \
    --bind-addr 0.0.0.0:8443 \
    --auth password &
fi

exec "$@"
