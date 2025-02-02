export default async function BlogPage({params}: any) {
    const blogParam = (await params).blogId;
    


    return(<>
        <div>Blog postId: {JSON.stringify(blogParam)};</div>
        
    </>)
}   