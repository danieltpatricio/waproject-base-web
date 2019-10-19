export default interface IOrder {
  id?: number;
  description: string;
  quantity: number;
  price: number;
  createdDate?: Date;
  updatedDate?: Date;
}

export enum enRoles {
  sysAdmin = 'sysAdmin',
  admin = 'admin',
  user = 'user'
}
