import MeetUpCard from "./MeetUpCard"

export default function MeetUpList(props) {
    console.log(props.menuList)
    return props.menuList.map((item) => {
        return (
            <MeetUpCard item={item} key={item.id} />
        )
    })

}
