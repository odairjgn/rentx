import { Model } from "@nozbe/watermelondb";
import { field, date, readonly } from "@nozbe/watermelondb/decorators";

class Car extends Model {
  static table = "cars";

  @field("name")
  name!: string;

  @field("brand")
  brand!: string;

  @field("about")
  about!: string;

  @field("fuel_type")
  fuel_type!: string;

  @field("period")
  period!: string;

  @field("price")
  price!: number;

  @field("thumbnail")
  thumbnail!: string;
}

export { Car };
