import { useEffect, useState } from "react";

export function useFetchUrl(URL) {
   const [posts, setPosts] = useState({});
   const [loading, setLoading] = useState(true);
  
    async function getPosts() {
      setLoading(true);
      //fetch data from backend
      const response = await fetch(URL);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }
  
    useEffect(()=>{
      //fetch data from backend
      getPosts();  
    }, [URL])
  
    return {
      posts,
      loading
    }
}

