"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
// Import the hook from the unified breadcrumb system file
import { useBreadcrumb } from "@/components/common/components/dynamic-breadcrumb";

const fetchUserData = async (id: string) => ({ name: "Show Username" });

export default function ProfilePage() {
    const params = useParams();
    const { setFriendlyName } = useBreadcrumb();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    useEffect(() => {
        if (id) {
            fetchUserData(id).then(user => {
                setFriendlyName(id, user.name);
            });
        }
    }, [id, setFriendlyName]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Profile Page</h1>
            <p className="mt-2">This is the profile for user ID: {id}</p>
        </div>
    );
}