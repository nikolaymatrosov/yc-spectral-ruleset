export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "action": {
            "description": "The type of operation to perform.",
            "enum": [
                "PutRecord"
            ],
            "type": "string"
        },
        "partition_key": {
            "description": "Shard key. `partition_key` is where parameter substitution takes place.",
            "type": "string"
        },
        "service_account_id": {
            "description": "ID of the service account. Used for authorization when performing Data Streams stream operations. If you omit the parameter, the value used is that of the top-level parameter called `service_account_id`.",
            "type": "string"
        },
        "stream_name": {
            "description": "Data Streams stream name.",
            "type": "string"
        },
        "type": {
            "enum": [
                "cloud_datastreams"
            ],
            "type": "string"
        }
    },
    "required": [
        "action",
        "partition_key",
        "stream_name",
        "type"
    ],
    "type": "object"
}
