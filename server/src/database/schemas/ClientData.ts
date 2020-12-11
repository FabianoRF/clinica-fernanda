import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('client_datasets')
class ClientData {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  client_id: ObjectID;

  @Column()
  personal_data: string;

  @Column()
  habits: string;

  @Column()
  history: string;

  @Column()
  facial_evaluation: string;

  @Column()
  anotations: string;
}

export default ClientData;
