import { Module } from '@nestjs/common'
import { ConsumerController } from './consumer.controller'
import { ConsumerService } from './consumer.service'
import { QueueService } from './queue.service'

@Module({
  imports: [],
  controllers: [ConsumerController],
  providers: [ConsumerService, QueueService],
})
export class ConsumerModule {}
