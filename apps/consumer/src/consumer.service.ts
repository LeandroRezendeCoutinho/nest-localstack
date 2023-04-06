import { ReceiveMessageCommandOutput } from '@aws-sdk/client-sqs'
import { Injectable } from '@nestjs/common'
import { QueueService } from './queue.service'

@Injectable()
export class ConsumerService {
  constructor(private queueService: QueueService) { }

  async consume(): Promise<ReceiveMessageCommandOutput> {
    const response = await this.queueService.receiveMessage()
    if (response.Messages) {
      const message = response.Messages[0]
      this.deleteMessage(message.ReceiptHandle)
    }
    return response
  }

  private async deleteMessage(receiptHandle: string) {
    const response = await this.queueService.deleteMessage(receiptHandle)
    return response
  }
}
