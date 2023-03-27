import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs" // ES Modules import
import { Injectable } from "@nestjs/common"

@Injectable()
export class QueueService {
  async receiveMessage() {
    const client = SqsClientFactory.getSqsClient()
    const command = new ReceiveMessageCommand({
      QueueUrl: 'http://localhost:4566/000000000000/test-queue',
      MaxNumberOfMessages: 1,
      WaitTimeSeconds: 20
    })
    const response = await client.send(command)
    return response
  }
}

class SqsClientFactory {
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