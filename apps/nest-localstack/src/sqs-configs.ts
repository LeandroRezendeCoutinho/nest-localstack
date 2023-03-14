import { CreateQueueCommandInput, SQSClientConfig } from "@aws-sdk/client-sqs"

export const queueUrl = process.env.QUEUE_URL

export const sqsClientConfig: SQSClientConfig = {
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
    // credentials: {
    //     accessKeyId: 'test',
    //     secretAccessKey: 'test'
    // }
}

export const createQueueCommandInput: CreateQueueCommandInput = {
    QueueName: 'test-queue'
}

