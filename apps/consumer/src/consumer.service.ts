import { ReceiveMessageCommandOutput } from '@aws-sdk/client-sqs'
import { Injectable } from '@nestjs/common'
import { QueueService } from './queue.service'

@Injectable()
export class ConsumerService {
  constructor(private queueService: QueueService) { }

  async consume(): Promise<ReceiveMessageCommandOutput> {
    return this.queueService.receiveMessage()
  }
}
