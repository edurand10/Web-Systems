import { Sequelize, DataTypes, Model } from "sequelize";
import { starterbands } from "../data/starter-pets.js";

const sequelize = new Sequelize("sqlite:../data/database.sqlite");

class Band extends Model {}

Band.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    bandname: DataTypes.TEXT,
    bandgenre: DataTypes.TEXT,
    bandphoto: DataTypes.TEXT,
    ticketprice: DataTypes.FLOAT
  },
  {
    sequelize,
  }
);

await sequelize.sync();

// // seed the database!
await Band.bulkCreate(
  starterbands.map((m) => {
    const { id, ...Band } = m;
    return Band;
  })
);

export { Band };
