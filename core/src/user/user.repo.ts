import { User } from "./user.entity";
import { ExtendedEntityRepository } from "../base.repo";

export class UserRepository extends ExtendedEntityRepository<User> {}
