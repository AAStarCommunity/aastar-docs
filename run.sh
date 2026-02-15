#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${script_dir}"

port=5173
pids="$(lsof -ti "tcp:${port}" 2>/dev/null || true)"
if [[ -n "${pids}" ]]; then
  kill ${pids} 2>/dev/null || true

  for _ in {1..30}; do
    if ! lsof -ti "tcp:${port}" >/dev/null 2>&1; then
      break
    fi
    sleep 0.1
  done

  pids="$(lsof -ti "tcp:${port}" 2>/dev/null || true)"
  if [[ -n "${pids}" ]]; then
    kill -9 ${pids} 2>/dev/null || true
  fi
fi

pnpm run docs:dev -- --port "${port}" --strictPort
