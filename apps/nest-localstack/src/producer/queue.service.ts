import { CreateQueueCommand, SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs"
import { Injectable } from "@nestjs/common"
import { createQueueCommandInput, queueUrl, sqsClientConfig } from "../sqs-configs"

@Injectable()
export class QueueService {
    private sqsClient: SQSClient
    private command: CreateQueueCommand

    async createQueue() {
        this.sqsClient = new SQSClient(sqsClientConfig)
        this.command = new CreateQueueCommand(createQueueCommandInput)
        const response = await this.sqsClient.send(this.command)
        if (response.QueueUrl) {
            return response
        }
    }

    async sendMessage(message: any) {
        const sqsClient = new SQSClient(sqsClientConfig)
        const command = new SendMessageCommand({
            QueueUrl: queueUrl,
            MessageBody: message
        })
        const response = await sqsClient.send(command)
        return response
    }
}