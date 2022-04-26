export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "bucket": {
            "description": "Name of the bucket.",
            "type": "string"
        },
        "error_object": {
            "description": "Optional parameter. Object name returned if HTTP error code 4xx is received instead of object.",
            "type": "string"
        },
        "object": {
            "description": "Object name. Supports parameter standardization from the path of the original request. Parameters are substituted in `object`.",
            "type": "string"
        },
        "presigned_redirect": {
            "description": "If the value is true, a pre-signed URL is generated and a redirect is returned to the client.",
            "type": "boolean"
        },
        "service_account_id": {
            "description": "Service account ID used for authorization when accessing a container. If the parameter is omitted, the value of the top-level `service_account_id` parameter is used.",
            "type": "string"
        },
        "type": {
            "enum": [
                "object-storage",
                "object_storage"
            ],
            "type": "string"
        }
    },
    "required": [
        "bucket",
        "object",
        "type"
    ],
    "type": "object"
}
