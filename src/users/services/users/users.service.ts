import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateuserParams, UpdateuserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  createUser(userDetails: CreateuserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  updateUser(id:number,updateUserDetails:UpdateuserParams){
    return this.userRepository.update({id},{...updateUserDetails});
  }

  deleteUser(id:number){
    return this.userRepository.delete({id});
  }

}
