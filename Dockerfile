FROM node:9

WORKDIR /usr/src/app

# You have to specify "--unsafe-perm" with npm install
# when running as root.  Failing to do this can cause
# install to appear to succeed even if a preinstall
# script fails, and may have other adverse consequences
# as well.
COPY package*.json ./

RUN npm install --unsafe-perm

COPY . .

#ENV PORT 3500
# This must match the port exposed in the app
# To do, drive this from the .env so this isn't fixed to 4000
EXPOSE 4000

CMD [ "npm", "start" ]