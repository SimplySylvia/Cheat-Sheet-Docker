# 🐳 Docker Command Cheat Sheet

With docker installed, here are some common commands you will use. I have also provided some example code to check out.

### Check available containers

```bash
docker ps
```

> example output

```bash
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                    NAMES
17f6f866d38c   446dbae429b7   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   0.0.0.0:8000->4000/tcp   festive_knuth
```

### Create an Image

Breakdown

```bash
docker build -t [username]/[appname:version] [directory]
```

> Example

```bash
docker build -t daltonhj/docker_example:1.0 . # the . here is current directory
```

### Build Container

The run command actually builds the container and then starts it up.

Breakdown

```bash
docker run -d -p [local port]:[container port] [imageID]
```

> Example

```bash
docker run -d --name myContainer -p 7000:4000 446dbae429b7
```

### Stop Container

Breakdown

```bash
docker stop [container]
```

> Example

```bash
docker stop myContainer
```

### Restart Container

Breakdown

```bash
docker start [container]
```

> Example

```bash
docker start myContainer
```

### Create Volume

```bash
docker volumn create [volumn name]
```

> Example

```bash
docker volumn create shared-stuff
```

### Use a Volumne

```bash
docker run -d --name myContainer --mount source=shared-stuff,target=/stuff -p 3000:4000 446dbae429b7
```

### Execute Commands Inside the Docker Container

Breakdown

```bash
docker exec [container name] [command to run]
```

> Example

```bash
docker exec myContainer cat src/index.js
```

### Docker Compose

If you setup a docker-compose yaml file this will make things a lot easier as you will not need to run the above commands and allows you to define the commands for multiple containers in the same go.

With yaml file created to start up

```bash
docker-compose up -d
```

To spin up multiple containers per image

```bash
docker-compose up --scale [service]=[amount]
```

With yaml file to spin down

```yaml
docker-compose down
```
