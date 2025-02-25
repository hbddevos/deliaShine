'use client';
import {
    TabDes,
    TabHeader,
    TabImage,
    TabImageContainer,
    TabItem,
    TabList,
    TabsProvider,
} from '../section/image-tab.jsx';


const tabs = [
    {
        title: 'La nuit',
        id: 'improve',
        description:
            'Avant d\'aller au lit la nuit',
        imageUrl:
            'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
    },
    {
        title: 'Le matin',
        id: 'important',
        description:
            'Le matin, il est important de se doucher avant de passer la, pommade dans les cheveux.',
        imageUrl:
            'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
    },
    {
        title: 'Tous les jours',
        id: 'same',
        description:
            'Les produits de DeliaShine sont fait a base de produit naturel et sont donc sans danger pour vos cheveux.',
        imageUrl:
            'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
    },
];
function ImageTabs() {
    return (
        <>
            <div className=" w-full  h-full">
                <TabsProvider
                    defaultValue="improve"
                    className="md:grid md:grid-cols-12 items-center justify-center">
                    <TabImageContainer className="md:col-span-7">
                        {tabs.map((tab, index) => (
                            <TabImage key={index} value={tab.id}>
                                <img
                                    src={tab.imageUrl}
                                    alt={tab.title}
                                    className="w-full h-full rounded-md"
                                />
                            </TabImage>
                        ))}
                    </TabImageContainer>
                    <TabList className="md:col-span-5 ">
                        {tabs.map((tab, index) => (
                            <TabItem key={index} value={tab.id}>
                                <TabHeader value={tab.id}>{tab.title}</TabHeader>
                                <TabDes value={tab.id}>
                                    <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                                        {tab.description}
                                    </p>

                                    <img
                                        src={tab.imageUrl}
                                        alt={tab.title}
                                        className="md:hidden block rounded-md"
                                    />
                                </TabDes>
                            </TabItem>
                        ))}
                    </TabList>
                </TabsProvider>
            </div>
        </>
    );
}
export default ImageTabs;
