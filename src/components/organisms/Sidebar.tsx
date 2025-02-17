import ProfileHeader from "../molecules/ProfileHeader"
import NavLink from "../molecules/NavLink"
import Icon from "../atoms/Icon"

const Sidebar = () => {
    return (
        <main className="flex flex-col justify-between">
            <div className="flex flex-col gap-10">
                <ProfileHeader />
                <NavLink />
            </div>
            <div className="flex gap-2">
                <Icon>Github</Icon>
                <Icon>LinkedIn</Icon>
                <Icon>Instagram</Icon>
            </div>
        </main>
    )
}

export default Sidebar