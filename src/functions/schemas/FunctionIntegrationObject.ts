export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "PayloadFormatVersion": {
            "enum": [
                "0.1",
                "1.0"
            ],
            "type": "string"
        }
    },
    "properties": {
        "context": {
            "additionalProperties": true,
            "description": "Optional parameter. Operation context is an arbitrary object in YAML or JSON format. Passed to a function inside a request using the `requestContext.apiGateway.operationContext` field. Parameter substitution takes place in `context`.",
            "properties": {},
            "type": "object"
        },
        "function_id": {
            "description": "Function ID.",
            "type": "string"
        },
        "payload_format_version": {
            "$ref": "#/definitions/PayloadFormatVersion",
            "description": "Function call format version. Legal values: 0.1 and 1.0. Default version: 0.1."
        },
        "service_account_id": {
            "description": "Service account ID used for authorization when accessing a container. If the parameter is omitted, the value of the top-level `service_account_id` parameter is used.",
            "type": "string"
        },
        "tag": {
            "description": "Optional parameter. Version tag. The default value is `$latest`. Parameters are substituted in tag.",
            "type": "string"
        },
        "type": {
            "enum": [
                "cloud-functions",
                "cloud_functions"
            ],
            "type": "string"
        }
    },
    "required": [
        "function_id",
        "type"
    ],
    "type": "object"
}
