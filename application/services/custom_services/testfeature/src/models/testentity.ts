
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testentitySchema = new Schema({
   name: String,
   age: Number,
   place: String
})

const testentityModel = mongoose.model('testentity', testentitySchema, 'testentity');
export default testentityModel;
