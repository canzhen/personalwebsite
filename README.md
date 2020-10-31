# Personal Website
Canzhen's Personal Website (Golang + React)

## Issue to be fixed
1. On the server, favicon.ico won't show up (locally it's fine)


## Server setup
1. install go packages
```
go get github.com/go-playground/universal-translator
go get github.com/golang/protobuf/proto
go get github.com/leodido/go-urn
go get github.com/mattn/go-isatty
go get github.com/ugorji/go/codec
go get gopkg.in/yaml.v2
```
2. run `go build` to build executable for the server
3. deploy go server with `systemd`

- `touch /lib/systemd/system/personal-website-server.service`
- insert the following into the file through `vim` 
    ```
    [Unit]
    Description=personal-website-server

    [Service]
    Type=simple
    Restart=always
    RestartSec=5s
    ExecStart=/root/personalwebsite/src/server/server.sh

    [Install]
    WantedBy=multi-user.target
    ```
- run `service personal-website-server start` to start the server
- you can check the status by running `service personal-website-server status`

4. `npm install pm2` -> `pm2 start npm -- start`
5. use nginx as reverse proxy, configuration `vim /etc/nginx/nginx.conf`, `service nginx start`

## Client setup:
1. go to $(root)/src/client
2. run `npm install`
3. run `npm run build`
