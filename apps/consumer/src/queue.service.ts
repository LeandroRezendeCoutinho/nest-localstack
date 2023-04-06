import { DeleteMessageCommand, ReceiveMessageCommand } from "@aws-sdk/client-sqs" // ES Modules import
import { Injectable } from "@nestjs/common"
import { SqsClientFactory } from "./factories/sqs-client.factory"

@Injectable()
export class QueueService {
  async receiveMessage() {
    const client = SqsClientFactory.getSqsClient()
    const command = new ReceiveMessageCommand({
      QueueUrl: 'http://localhost:4566/000000000000/test-queue',
      MaxNumberOfMessages: 1,
      WaitTimeSeconds: 5
    })
    const response = await client.send(command)
    return response
  }

  async deleteMessage(receiptHandle: string) {
    const sqsClient = SqsClientFactory.getSqsClient()
    const command = new DeleteMessageCommand({
      QueueUrl: 'http://localhost:4566/000000000000/test-queue',
      ReceiptHandle: receiptHandle
    })
    const response = await sqsClient.send(command)
    return response
  }
}

