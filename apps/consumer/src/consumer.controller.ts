import { ReceiveMessageCommandOutput } from '@aws-sdk/client-sqs'
import { Controller, Get } from '@nestjs/common'
import { ConsumerService } from './consumer.service'

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @Get()
  consume(): Promise<ReceiveMessageCommandOutput> {
    return this.consumerService.consume()
  }
}
