/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { ArrayMinSize, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { authorDto } from './author.dto';

export class BookDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty()
  @Type(() => authorDto)
  @ArrayMinSize(1, { message: 'At least one author is required' })
  @ValidateNested({ each: true })
  readonly author: authorDto[];

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  readonly language: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly releaseyear: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly pages: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  readonly publisher: string;
}

