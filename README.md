# How to use?

1. Clone the repo
```
git clone https://github.com/atrithakar/nginx-starter-pack.git
```

2. Go thru the nginx config files present at `nginx/conf.d` and copy the name (along with `.conf` extension) of it

3. Replace `CONF_FILE` in `compose.yaml` with the name you just copied in `line 8` of `compose.yaml`

4. Read the prerequisites for that config at `prerequisites-for-confs` folder (the names for the files to read are self explanatory)

5. Run the compose command (depending upon your configuration, you may also need to prepend sudo)
```
docker compose up
```