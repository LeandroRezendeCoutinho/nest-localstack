import { SQSClient } from "@aws-sdk/client-sqs"

export class SqsClientFactory {
    private static sqsClient: SQSClient

    static getSqsClient() {
        if (!this.sqsClient) {
            this.sqsClient = new SQSClient({
                region: 'us-east-1',
                endpoint: 'http://localhost:4566/',
                credentials: {
                    accessKeyId: '000000000000',
                    secretAccessKey: '000000000000'
                }
            })
        }
        return this.sqsClient
    }
}