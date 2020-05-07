import { Request, Response } from 'express';
import { testentityService } from '../service/testentityService';
import { CustomLogger } from '../config/Logger'
let testentity = new testentityService();

export class testentityController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
testentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpCreate');
    })}


}