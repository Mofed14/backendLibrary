export interface Icrud {
  find(req: any, res: any): void;
  create(req: any, res: any): void;
  update(req: any, res: any): void;
  delete(req: any, res: any): void;
}
