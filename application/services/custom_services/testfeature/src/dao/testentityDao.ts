import * as mongoose from 'mongoose';
import testentityModel from '../models/testentity';
import { CustomLogger } from '../config/Logger'


export class testentityDao {
    
    constructor() { }
    
    public GpCreate(testentityData, callback){
new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpCreate')
let temp = new testentityModel(testentityData);
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}