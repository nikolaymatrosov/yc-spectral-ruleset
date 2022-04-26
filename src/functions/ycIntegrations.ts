import {IFunction} from "@stoplight/spectral-core";
import {RulesetFunctionContext} from "@stoplight/spectral-core/dist/types/function";
import {schema} from "@stoplight/spectral-functions";
import {IntegrationType} from "../extensions";
import schemaContainer from './schemas/ContainerIntegrationObject';
import schemaDatasphere from './schemas/DatasphereIntegrationObject';
import schemaDatastream from './schemas/DatastreamIntegrationObject';
import schemaDummy from './schemas/DummyIntegrationObject';
import schemaFunction from './schemas/FunctionIntegrationObject';
import schemaHttp from './schemas/HttpIntegrationsObject';
import schemaS3 from './schemas/S3IntegrationObject';
import schemaYmq from './schemas/YmqIntegrationObject';
import {isObject} from "./utils";


const validIntegrationTypes: string[] = [
    IntegrationType.dummy,
    IntegrationType.cloud_functions,
    IntegrationType._cloud_functions,
    IntegrationType.http,
    IntegrationType.object_storage,
    IntegrationType._object_storage,
    IntegrationType.cloud_datasphere,
    IntegrationType.serverless_containers,
    IntegrationType.cloud_ymq,
    IntegrationType.cloud_datastreams,
]

const integrationSchemas = {
    [IntegrationType.dummy]: schemaDummy,
    [IntegrationType.cloud_functions]: schemaFunction,
    [IntegrationType._cloud_functions]: schemaFunction,
    [IntegrationType.http]: schemaHttp,
    [IntegrationType.object_storage]: schemaS3,
    [IntegrationType._object_storage]: schemaS3,
    [IntegrationType.cloud_datasphere]: schemaDatasphere,
    [IntegrationType.serverless_containers]: schemaContainer,
    [IntegrationType.cloud_ymq]: schemaYmq,
    [IntegrationType.cloud_datastreams]: schemaDatastream,
};


export const ycIntegrations: IFunction = function (input, options, context: RulesetFunctionContext) {
    if (!isObject(input)) {
        return [{
            message: `Expected object at ${context.path}`
        }];
    }

    if (typeof input.type !== "string") {
        return [{
            message: `Expected string integration type at ${context.path}`
        }];
    }
    if (!validIntegrationTypes.includes(input["type"])) {
        return [{
            message: `Unknown integration type '${input["type"]}'.`
        }];
    }

    return schema(input, {schema: integrationSchemas[input["type"]], dialect: "draft7"}, context);
}

// noinspection JSUnusedGlobalSymbols
export default ycIntegrations;
