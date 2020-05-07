import { Request, Response } from 'express';
import {testentityDao} from '../dao/testentityDao';
import { CustomLogger } from '../config/Logger'


export class testentityService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpCreate')
     const  testentityData = req.body;
     testentity.GpCreate(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpCreate')
         callback(response);
         });
    }


}