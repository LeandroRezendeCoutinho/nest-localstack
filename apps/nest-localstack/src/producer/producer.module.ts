import { Module } from '@nestjs/common'
import { ProducerService } from './producer.service'
import { ProducerController } from './producer.controller'
import { QueueService } from './queue.service'

@Module({
  controllers: [ProducerController],
  providers: [ProducerService, QueueService]
})
export class ProducerModule {}
