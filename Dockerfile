FROM rust:1.77

WORKDIR /app
COPY . .

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@10.8.2

RUN cargo install wasm-pack
RUN rustup component add rustfmt

WORKDIR /app
RUN wasm-pack build --target web

WORKDIR /app/site
