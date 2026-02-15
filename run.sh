#!/usr/bin/env bash
port=5173
pids="$(lsof -ti "tcp:${port}" 2>/dev/null || true)"
if [[ -n "${pids}" ]]; then
  kill -9 ${pids} 2>/dev/null || true
fi

pnpm docs:dev --port "${port}" --strictPort
