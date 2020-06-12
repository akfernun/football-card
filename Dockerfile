FROM node:14.3.0-alpine AS base
COPY ./package.json ./package-lock.json  ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:14.3.0-alpine AS prod
WORKDIR app/
COPY --from=base package.json .
COPY --from=base node_modules/ node_modules/
COPY --from=base dist/ dist/
CMD ["npm", "run", "start:prod"]

