export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "action": {
            "description": "The type of operation to perform.",
            "enum": [
                "SendMessage"
            ],
            "type": "string"
        },
        "delay_seconds": {
            "description": "The number of seconds to delay the message from being available for processing.",
            "minimum": 0,
            "type": "integer"
        },
        "folder_id": {
            "description": "ID of the folder containing the queue.",
            "type": "string"
        },
        "queue_url": {
            "description": "Queue address.",
            "type": "string"
        },
        "service_account_id": {
            "description": "ID of the service account. Used for authorization when performing a queue operation. If you omit the parameter, the value used is that of the top-level parameter `service_account_id`.",
            "type": "string"
        },
        "type": {
            "enum": [
                "cloud_ymq"
            ],
            "type": "string"
        }
    },
    "required": [
        "action",
        "delay_seconds",
        "folder_id",
        "queue_url",
        "type"
    ],
    "type": "object"
}
