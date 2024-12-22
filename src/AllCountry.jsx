import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryItem from './CountryItem'
import { getAllcountry } from './Redux/app/features/counrty/countrySlice'




function AllCountry() {
 const dispatch = useDispatch()

const countries= useSelector(store => store.country.countrylist
)


console.log(countries)
useEffect(()=>{
dispatch(getAllcountry())

},[])



  return (
  <div>
    {countries && countries.map((con)=>(
      <CountryItem key={con.id} con ={con}/>
    ))}
  </div>
  )
}

export default AllCountry
