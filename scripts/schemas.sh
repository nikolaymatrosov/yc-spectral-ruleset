for schema in S3IntegrationObject \
  ContainerIntegrationObject \
  DatasphereIntegrationObject \
  FunctionIntegrationObject \
  DummyIntegrationObject \
  HttpIntegrationsObject\
  YmqIntegrationObject \
  DatastreamIntegrationObject; do
    json=$(npx typescript-json-schema ./src/extensions.ts  $schema --required)
    cat << EOF > ./src/functions/schemas/${schema}.ts
export default ${json}
EOF
done
