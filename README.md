## Dockerized MERN Template

#### To create your own MongoDb, Express, React and Node.js deployment stack, follow these instructions 

Locally:

1. Create new repo on your github account
2. `git clone git@github.com:IsaacRay/MERN.git`
3. cd to MERN
4. `rm -rf .git`
5. `git init`
6. `git add .`
7. `git commit -m "first commit"`
8. `git remote add origin <url to your new repo>`
9. `git push -u origin master`


On EC2:

1. `sudo apt-get update`
2. `sudo apt-get upgrade`
3. `sudo apt install docker.io`
4. `sudo apt install git`
5. ``sudo curl -L https://github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose``
6. `chmod +x /usr/local/bin/docker-compose`
7. `git clone <your new repo>`
8. `cd` to repo
9. `sudo ./run.sh`
