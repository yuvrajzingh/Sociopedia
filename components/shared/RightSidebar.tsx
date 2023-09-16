// import { currentUser } from "@clerk/nextjs";

// import UserCard from "../cards/UserCard";

// import { fetchCommunities } from "@/lib/actions/community.actions";
// import { fetchUsers } from "@/lib/actions/user.actions";

function RightSidebar(){
    return (
    <section className="custom-scrollbar rightsidebar">
        <div className="flex flex-1 flex-col justify-start">
            <h3 className="text-heading4-medium text-light-1">
                Suggested Communities
            </h3>
        </div>
        <div className="flex flex-1 flex-col justify-start">
            <h3 className="text-heading4-medium text-light-1">
                Suggested Users
            </h3>
        </div>
    </section>)
}

export default RightSidebar;