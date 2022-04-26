export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "content": {
            "additionalProperties": {
                "type": "string"
            },
            "description": "Data to be sent in response.\nCan be either real content or mapping from the requested `Content-Type` into data.\nThis lets you send errors in the requested format: JSON or XML.\nThe `*` key is used for the default value. Parameters are substituted in `content`.",
            "type": "object"
        },
        "http_code": {
            "description": "HTTP response code",
            "maximum": 599,
            "minimum": 100,
            "type": "integer"
        },
        "http_headers": {
            "additionalProperties": {
                "anyOf": [
                    {
                        "items": {
                            "type": "string"
                        },
                        "type": "array"
                    },
                    {
                        "type": "string"
                    }
                ]
            },
            "description": "List of headers to be sent in response. Parameters are substituted in `http_headers`.",
            "type": "object"
        },
        "type": {
            "enum": [
                "dummy"
            ],
            "type": "string"
        }
    },
    "required": [
        "content",
        "http_code",
        "http_headers",
        "type"
    ],
    "type": "object"
}
