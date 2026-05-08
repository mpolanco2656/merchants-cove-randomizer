# Deploy with Docker

This app builds a static Vite bundle and serves it with Nginx.

## Local smoke test

```powershell
docker compose up -d --build
docker compose ps
curl http://localhost:8086/health
```

Open:

```text
http://localhost:8086
```

Stop it:

```powershell
docker compose down
```

If port `8086` is already busy, run:

```powershell
docker run -d --name merchants-cove-randomizer -p 8081:80 merchants-cove-randomizer:latest
```

## VPS deploy

On the VPS:

```bash
git clone <repo-url> merchants-cove-randomizer
cd merchants-cove-randomizer
docker compose up -d --build
docker compose ps
```

The included Compose file maps `127.0.0.1:8086` to container port `80`, matching
the VPS pattern where frontends are reachable only through localhost and then
published through Cloudflare Tunnel or a reverse proxy. If that port is already
used, change the host side of the mapping in `docker-compose.yml`.

## Reverse proxy example

Use this if a host-level Nginx or Caddy instance terminates TLS.

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:8086;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Update an existing deploy

```bash
git pull
docker compose up -d --build
docker image prune -f
```
