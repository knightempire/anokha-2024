import React, { useState } from 'react'
import theme1 from '@/../public/images/theme1.png'
import Image from 'next/image'
import {Box, Tab} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Themes = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue)=>{
    setValue(newValue)
  }
  return (
    <div className='font-poppins h-[100%] mt-[50px]'>
      <p className='font-bold text-[3rem] text-center mb-[20px]'>Themes</p>
      
      {/* <div className='bg-indigo-500 md:w-[40%] sm:w-[90%] mx-auto  rounded-[15px] my-2'>
        <Image src={theme1} className='h-[250px] object-cover w-full rounded-t-[15px]'/>

        <div className='text-white text-[2.5rem] text-left font-bold pb-7 mx-10 mt-[-30px]'>
          Theme #1
            <div className='text-base font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
            </br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div> 
          </div>    */}
          <Box>
            <TabContext value={value}>
              <Box sx={{border:1, borderColor:'divider', borderRadius:3}} className='md:w-[50%] sm:w-[80%] mx-auto'>
                <TabList onChange={handleChange} centered>
                  <Tab label="Theme one" value="1"/>
                  <Tab label="Theme two" value="2"/>
                  <Tab label="Theme three" value="3"/>
                </TabList>

              </Box>
              <TabPanel value='1' className='text-center'>Theme 1 Content</TabPanel>
              <TabPanel value='2' className='text-center'>Theme 2 Content</TabPanel>
              <TabPanel value='3' className='text-center'>Theme 3 Content</TabPanel>

            </TabContext>
          </Box>

  </div>
  )
}

export default Themes
