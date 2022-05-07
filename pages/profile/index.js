import Link from "next/link";
import React from "react";

const Profile = ({ user }) => {
    return (
        <div className="container">
            <h4 className="text-center py-4 mt-4">Profile List</h4>
            <div className="d-flex flex-wrap">
                {user.map((single) => (
                    <div
                        style={{ cursor: "pointer" }}
                        className="card p-3 cursor-pointer m-1"
                        key={single.id}>
                        <Link href={`/profile/${single.id}`}>
                            <h5>{single.name}</h5>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;

export async function getServerSideProps(context) {
    const response = await fetch("http://localhost:5000/profile");
    const result = await response.json();
    return {
        props: {
            user: result,
        },
    };
}
