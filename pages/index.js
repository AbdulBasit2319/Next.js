import Layout from "../components/Layout/Layout"
import MeetUpList from "../components/meet-up-section/MeetUpList"

const menuData = [
    {
        id: 'm1',
        title: 'LOCATION one',
        image: 'https://en.wikipedia.org/wiki/Mountain#/media/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
        address: "dummy street 2q"
    },
    {
        id: 'm2',
        title: 'LOCATION Two',
        image: 'https://en.wikipedia.org/wiki/Mountain#/media/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
        address: "dummy street 3"
    },
    {
        id: 'm3',
        title: 'LOCATION Three',
        image: 'https://en.wikipedia.org/wiki/Mountain#/media/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
        address: "dummy street 3"
    },
]

export default function HomePage() {
    return (
        <Layout><MeetUpList menuList={menuData} /></Layout>

    )
}