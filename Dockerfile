FROM node:9

WORKDIR /usr/src/app

# You have to specify "--unsafe-perm" with npm install
# when running as root.  Failing to do this can cause
# install to appear to succeed even if a preinstall
# script fails, and may have other adverse consequences
# as well.
COPY package*.json ./

RUN npm install --unsafe-perm

#COPY . /app/
COPY . .

#USER node
ENV PORT 3500
EXPOSE 8080

CMD [ "npm", "start" ]