set dotenv-load := true

# Add ./node_modules/.bin to PATH
export PATH := ((justfile_directory() + "/node_modules/.bin:") + env_var("PATH"))

default:
  just --list

codegen:
  cd "{{justfile_directory()}}/qhabits" && yarn codegen

console:
  cd "{{justfile_directory()}}/database" && hasura console

up:
  cd "{{justfile_directory()}}/database" && docker-compose up -d
  cd "{{justfile_directory()}}/qhabits" && yarn web

# Hmmm
# download-schema:
#   apollo service:download --endpoint=http://localhost:8080/v1/graphql graphql-schema.json
