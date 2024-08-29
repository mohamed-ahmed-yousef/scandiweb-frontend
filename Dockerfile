FROM node:22-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app
COPY package*.json .

RUN pnpm install

COPY . .

ENV PORT=5173

EXPOSE $PORT

CMD ["pnpm", "dev"]
