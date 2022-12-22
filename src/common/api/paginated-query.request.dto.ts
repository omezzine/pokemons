import { Type } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

export class PaginatedQueryRequestDto {
  @IsOptional()
  @Min(10)
  @Max(200)
  @Type(() => Number)
  readonly limit?: number;

  @IsOptional()
  @Type(() => Number)
  readonly offset?: number;
}
