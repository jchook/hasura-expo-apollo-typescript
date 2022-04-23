set dotenv-load := true

# Add ./node_modules/.bin to PATH
export PATH := ((justfile_directory() + "/node_modules/.bin:") + env_var("PATH"))

default:
  just --list

codegen:
  cd "qhabits" && yarn codegen

console:
  cd "database" && hasura console

down:
  cd "database" && docker-compose down

up:
  cd "database" && docker-compose up -d
  cd "qhabits" && yarn web

# Hmmm
# download-schema:
#   apollo service:download --endpoint=http://localhost:8080/v1/graphql graphql-schema.json
