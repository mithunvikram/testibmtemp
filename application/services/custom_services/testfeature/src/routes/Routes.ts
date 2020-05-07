import { Request, Response, NextFunction } from "express";
import { testentityController } from '../controller/testentityController';


export class Routes {
    private testentity: testentityController = new testentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/testentity/save').post(this.testentity.GpCreate);
     }

}