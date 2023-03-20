import { CreateQueueCommand, ListQueuesCommand, SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs"
import { Injectable } from "@nestjs/common"

@Injectable()
export class QueueService {
    private sqsClient: SQSClient
    private command: CreateQueueCommand
    private sqsConfig = {
        region: 'us-east-1',
        endpoint: 'http://localhost:4566/',
    }

    async listQueues() {
        const client = new SQSClient(this.sqsConfig)
        const command = new ListQueuesCommand({ QueueNamePrefix: 'test' })
        return await client.send(command)
    }

    async createQueue() {
        this.sqsClient = new SQSClient(this.sqsConfig)
        this.command = new CreateQueueCommand({ QueueName: 'test-queue' })
        const response = await this.sqsClient.send(this.command)
        if (response.QueueUrl) {
            return response
        }
    }

    async sendMessage(body: any) {
        const queueLlist = await this.listQueues()
        if (queueLlist.QueueUrls?.length === 0)
            await this.createQueue()

        const sqsClient = new SQSClient(this.sqsConfig)
        const command = new SendMessageCommand({
            QueueUrl: 'http://localhost:4566/000000000000/test-queue',
            MessageBody: body.message
        })
        const response = await sqsClient.send(command)
        return response
    }
}