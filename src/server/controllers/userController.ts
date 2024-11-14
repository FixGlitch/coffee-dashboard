
import { database } from '../config/database';
import { UserEntity } from '../schema/UserEntity';
import { hashPassword } from '../utils/helpers';

export const userController = {
  async getUserById(id: string) {
    const userRepository = database.getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { id } });
    if (!user) throw new Error('User not found');
    return user;
  },

  async createUser(name: string, email: string, password: string) {
    const userRepository = database.getRepository(UserEntity);
    const hashedPassword = await hashPassword(password);
    const newUser = userRepository.create({ name, email, password: hashedPassword });
    await userRepository.save(newUser);
    return newUser;
  },
};
