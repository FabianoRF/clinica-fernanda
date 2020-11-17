import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('client_datasets')
class ClientData {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  client_id: ObjectID;

  @Column()
  name: string;

  @Column()
  personal_data: string;

  @Column()
  habits: string;

  @Column()
  c_history: string;

  @Column()
  e_history: string;

  @Column()
  facial_evoluation: string;

  @Column()
  anotations: string;
}

export default ClientData;
