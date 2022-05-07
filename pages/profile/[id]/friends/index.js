import React from "react";

const Friends = ({ friends }) => {
    "friends", friends;
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-2">Friends</h3>
            <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                {friends.map((friend) => (
                    <div key={friend.id} className="card mb-2 p-3">
                        <p>
                            <b>ID: </b>
                            {friend.id}
                        </p>
                        <p>
                            <b>Name: </b>
                            {friend.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;

export async function getServerSideProps(context) {
    const response = await fetch(
        `http://localhost:5000/profile/${context.params.id}`
    );
    const result = await response.json();
    return {
        props: {
            friends: result.friends,
        },
    };
}
