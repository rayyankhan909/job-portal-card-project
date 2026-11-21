import React from 'react'
import Card from './components/Card'


const App = () => {
  
  const jobOpenings = [
  {
    brandLogo: "/search.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "/amazon.png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "SDE",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "/microsoft.png",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "/meta.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "/apple.png",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "/netflix.png",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "/adobe.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Python Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "/nvidia.png",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "/ibm.png",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Data Scientist",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "/salesforce.png",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  }
];
  console.log(jobOpenings);
  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        console.log(idx);
        
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} logo={elem.brandLogo} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App