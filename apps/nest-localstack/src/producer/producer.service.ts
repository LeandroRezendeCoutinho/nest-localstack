import { Injectable } from '@nestjs/common'
import { ProducerDto } from './dto/producer.dto'
import { QueueService } from './queue.service'

@Injectable()
export class ProducerService {
  constructor(private queueService: QueueService) {}

  create(producerDto: ProducerDto) {
    this.queueService.sendMessage(producerDto)
    return `Queued message: ${producerDto}`
  }
}
