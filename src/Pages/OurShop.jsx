import { useParams } from 'react-router-dom';
import useMenu from '../CustomHook/useMenu';
import Cover from '../Shared/Cover';
import SingleCard from '../Shared/SingleCard';
import ourShop from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
const OurShop = () => {
    const [menu]=useMenu()
   
    const {category}=useParams()
    console.log(category);
    const categoris=['salad','pizza','soup','dessert','drinks']
    const initialIndex=categoris.indexOf(category)
    console.log(initialIndex);
    const [index,setIndex]=useState(initialIndex)

    const drinkss=menu.filter(ofr=>ofr.category=="drink")
    const dessert=menu.filter(ofr=>ofr.category=="dessert")
    const pizzas=menu.filter(ofr=>ofr.category=="pizza")
    const soups=menu.filter(ofr=>ofr.category=="soup")
    const salads=menu.filter(ofr=>ofr.category=="salad")
    return (
        <div>
            <Cover
                image={ourShop}
                Heading={'OUR SHOP'}
            ></Cover>

            <div className=' flex justify-center'>
                <Tabs defaultIndex={index} onSelect={(index)=>setIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            salads.map(item=><SingleCard
                            key={item._id}
                            item={item}
                            ></SingleCard>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            pizzas.map(item=><SingleCard
                            key={item._id}
                            item={item}
                            ></SingleCard>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            soups.map(item=><SingleCard
                            key={item._id}
                            item={item}
                            ></SingleCard>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            dessert.map(item=><SingleCard
                            key={item._id}
                            item={item}
                            ></SingleCard>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            drinkss.map(item=><SingleCard
                            key={item._id}
                            item={item}
                            ></SingleCard>)
                        }
                       </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>


    );
};

export default OurShop;