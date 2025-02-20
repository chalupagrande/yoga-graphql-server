import type   { PostResolvers } from './../../__generated__/types.generated';
    export const Post: PostResolvers = {
    /* Implement Post resolver logic here */
        author: async (_parent, _arg, _ctx) => { /* Post.author resolver is required because Post.author exists but PostMapper.author does not */ }
    };