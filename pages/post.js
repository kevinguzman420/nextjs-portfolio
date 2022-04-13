import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {

    const router = useRouter();
    // console.log(router.query.title);

    const currentPost = posts.filter(post => post.title === router.query.title)[0];
    // console.log(currentPost);

    return (
        <Layout footer={false}>
            <h1>{currentPost.title}</h1>
            <div className="text-center">
                <img src={currentPost.imageURL} alt="" className="img-fluid" style={{width: "50%"}} />
                <p>{currentPost.content}</p>

            </div>
        </Layout>
    )
}

export default Post;
