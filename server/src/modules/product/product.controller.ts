import { Controller, Get, Param } from '@nestjs/common';

import products, {Product} from '../../product'

@Controller('products')
export class ProductController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<any> {
    return products.find((product) => product.id === parseInt(id));
  }
}
