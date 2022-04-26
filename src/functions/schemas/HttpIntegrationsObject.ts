export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "HttpIntegrationTimeouts": {
            "properties": {
                "connect": {
                    "minimum": 0,
                    "type": "number"
                },
                "read": {
                    "minimum": 0,
                    "type": "number"
                }
            },
            "required": [
                "connect",
                "read"
            ],
            "type": "object"
        }
    },
    "properties": {
        "headers": {
            "additionalProperties": {
                "type": "string"
            },
            "description": "HTTP headers to be passed. Original request headers are not passed. Parameters are substituted in `headers`.",
            "type": "object"
        },
        "method": {
            "description": "Optional parameter. HTTP method used for the invocation. If the parameter is omitted, it defaults to the method of request to API Gateway.",
            "enum": [
                "DELETE",
                "GET",
                "PATCH",
                "POST",
                "PUT"
            ],
            "type": "string"
        },
        "timeouts": {
            "$ref": "#/definitions/HttpIntegrationTimeouts",
            "description": "Optional parameter. The `read` and `connect` invocation timeouts, in seconds."
        },
        "type": {
            "enum": [
                "http"
            ],
            "type": "string"
        },
        "url": {
            "description": "URL to redirect the invocation to (must be accessible from the internet). Parameters are substituted in `url`.",
            "type": "string"
        }
    },
    "required": [
        "headers",
        "method",
        "timeouts",
        "type",
        "url"
    ],
    "type": "object"
}
