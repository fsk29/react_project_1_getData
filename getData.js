import axios from "axios";

const getUserWithPosts = (async (id) => {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id);
    const { data: user_posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)

    user.posts = user_posts;

    return user;
})

export default getUserWithPosts;