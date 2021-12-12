set dotenv-load := true

# Add ./node_modules/.bin to PATH
export PATH := ((justfile_directory() + "/node_modules/.bin:") + env_var("PATH"))

start:
  cd "{{justfile_directory()}}/database" && docker-compose up -d
  cd "{{justfile_directory()}}/qhabits" && yarn web

console:
  hasura console

# https://github.com/apollographql/apollo-tooling/issues/2422
codegen:
  # > Rover's focus is around providing an excellent graph management
  # > experience. For that reason, we have intentionally omitted commands that
  # > focus on client project development, such as `client:codegen` and
  # > `client:check`.

  # lol this doesn't work anymore
  apollo service:download --endpoint=http://localhost:8080/v1/graphql graphql-schema.json

