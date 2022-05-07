import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Indevisual = ({ user }) => {
    const router = useRouter();
    return (
        <div className="container">
            <h3 className="mb-4 text-center pt-5">You expected Profile</h3>
            <h4 style={{ fontWeight: "lighter" }}>
                <b>Name: </b>
                {user.name}
            </h4>
            <p>
                <b>Email: </b>
                {user.email}
            </p>
            <p>
                <b>Phone: </b>
                {user.phone}
            </p>
            <p>
                <b>Website: </b>
                {user.website}
            </p>
            <p>
                <b>Company: </b>
                {user.company.name}
            </p>
            <p>
                <b>Address: </b>
                {`${user.address.suite}, ${user.address.street}, ${user.address.city}- ${user.address.zipcode}`}
            </p>
            <button className="btn btn-primary ml-2">
                <Link
                    href={{
                        pathname: `${router.route}/projects`,
                        query: { id: router.query.id },
                    }}>
                    See projexts
                </Link>
            </button>
            <button className="btn btn-success mx-2">
                <Link
                    href={{
                        pathname: `${router.route}/friends`,
                        query: { id: router.query.id },
                    }}>
                    See friends
                </Link>
            </button>
        </div>
    );
};

export default Indevisual;

export async function getServerSideProps(context) {
    const response = await fetch(
        `http://localhost:5000/profile/${context.params.id}`
    );
    const result = await response.json();
    return {
        props: {
            user: result,
        },
    };
}
