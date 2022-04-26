export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "folder_id": {
            "description": "ID of the folder containing the created DataSphere project and the deployed node.",
            "type": "string"
        },
        "node_id": {
            "description": "DataSphere node ID.",
            "type": "string"
        },
        "service_account_id": {
            "description": "ID of the service account. Used for authorization when calling a DataSphere node. If you omit the parameter, the value used is that of the top-level parameter called `service_account_id`.",
            "type": "string"
        },
        "type": {
            "enum": [
                "cloud_datasphere"
            ],
            "type": "string"
        }
    },
    "required": [
        "folder_id",
        "node_id",
        "type"
    ],
    "type": "object"
}
