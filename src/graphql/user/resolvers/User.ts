import type   { UserResolvers } from './../../__generated__/types.generated';
    export const User: UserResolvers = {
    /* Implement User resolver logic here */
        fullName: async (_parent, _arg, _ctx) => { /* User.fullName resolver is required because User.fullName exists but UserMapper.fullName does not */ },
        posts: async (_parent, _arg, _ctx) => { /* User.posts resolver is required because User.posts exists but UserMapper.posts does not */ }
    };