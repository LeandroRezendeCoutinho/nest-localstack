import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ProducerService } from './producer.service'
import { ProducerDto } from './dto/producer.dto'

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  create(@Body() producerDto: ProducerDto) {
    return this.producerService.create(producerDto)
  }
}
