import axios from "axios";
import { useEffect, useState } from "react";

export default async function ProfilePage() {

        const response = await axios.get("http://localhost:3000/api/profile", {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        const avtar = response.data.avtar;


    return(<>
        {avtar}
    </>)
}