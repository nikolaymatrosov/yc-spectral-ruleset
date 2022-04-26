export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "container_id": {
            "description": "Container ID.",
            "type": "string"
        },
        "context": {
            "additionalProperties": true,
            "description": "Optional parameter. Operation context is an arbitrary object in YAML or JSON format. Encoded in Base64 and passed to the container in the `X-Yc-ApiGateway-Operation-Context` header. `context` is where parameter substitution takes place.",
            "properties": {},
            "type": "object"
        },
        "service_account_id": {
            "description": "Service account ID used for authorization when accessing a container. If the parameter is omitted, the value of the top-level `service_account_id` parameter is used.",
            "type": "string"
        },
        "type": {
            "enum": [
                "serverless_containers"
            ],
            "type": "string"
        }
    },
    "required": [
        "container_id",
        "type"
    ],
    "type": "object"
}
